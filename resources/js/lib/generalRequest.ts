import { Response } from "@/interfaces/response";
import { Method } from "axios";

export interface requestOptions {
    url: string;
    method: Method;
    body?: Record<string, string> | FormData;
    formData?: boolean;
    token?: string;
}

export default async function generalRequest<T>({
    url,
    method,
    body,
    formData,
    token,
}: requestOptions): Promise<[Response<T>, number]> {
    const requestOptions: RequestInit = {
        method,
        body: !formData ? JSON.stringify(body) : (body as FormData),
        headers: !formData
            ? {
                  "Content-type": "application/json",
                  Authorization: `Bearer ${token}`,
              }
            : { Authorization: `Bearer ${token}` },
        cache: "no-store",
    };

    const response = await fetch(url, requestOptions);
    const data = await response.json();

    return [data, response.status];
}
