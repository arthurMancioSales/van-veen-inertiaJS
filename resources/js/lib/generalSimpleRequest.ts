import { Method } from "axios";
import Cookies from "js-cookie";

export interface requestOptions {
    url: string;
    method: Method;
    body?: object | FormData;
    formData?: boolean;
    token?: string;
}

export default async function generalSimpleRequest<T>({
    url,
    method,
    body,
    formData,
    token,
}: requestOptions): Promise<{
    data: T;
    error: boolean;
    status: number;
    message?: string;
}> {
    const requestOptions: RequestInit = {
        method,
        body: !formData ? JSON.stringify(body) : (body as FormData),
        headers: !formData
            ? {
                  "Content-type": "application/json",
                  Authorization: `Bearer ${token}`,
                  "X-XSRF-TOKEN": Cookies.get("XSRF-TOKEN") || "",
              }
            : { Authorization: `Bearer ${token}` },
        cache: "no-store",
    };
    const response = await fetch(url, requestOptions);
    console.log(response);
    const data = await response.json();

    return {
        data,
        error: !response.ok,
        status: response.status,
        message: data.message ? data.message : null,
    };
}
