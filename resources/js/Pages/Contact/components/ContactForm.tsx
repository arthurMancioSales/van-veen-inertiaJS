"use client";

import { Form, Formik } from "formik";
import { object, string } from "yup";
import { useRef, useState } from "react";
import { useToast } from "@/components/ui/toast/use-toast";
import { InputError, InputField, InputRoot } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { ReCAPTCHA } from "react-google-recaptcha";

export function ContactForm() {
    const [captcha, setCaptcha] = useState<string | null | undefined>("");
    const [captchaError, setCaptchaError] = useState(false);
    const { toast } = useToast();

    const initialValues = {
        fullName: "",
        email: "",
        phone: "",
        message: "",
        captcha: "",
    };

    const contactSchema = object({
        fullName: string()
            .max(40, "Deve ser 40 caractéres ou menos")
            .required("Obrigatório"),
        email: string().email("Email inválido").required("Obrigatório"),
        phone: string()
            .matches(
                /(?:([+]\d{1,4})[-.\s]?)?(?:[(](\d{1,3})[)][-.\s]?)?(\d{1,4})[-.\s]?(\d{1,4})[-.\s]?(\d{1,9})/g,
                "Telefone inválido",
            )
            .required("Obrigatório"),
        message: string().required("Obrigatório"),
    });

    const recaptchaRef = useRef<ReCAPTCHA | null>(null);

    function handleCaptcha() {
        setCaptcha(recaptchaRef.current?.getValue());
        setCaptchaError(false);
    }

    function resetCaptcha() {
        setCaptcha("");
        setCaptchaError(true);
    }
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={contactSchema}
            onSubmit={async (values, { setSubmitting }) => {
                // if (!captcha || captcha?.length <= 0) {
                //     setCaptchaError(true);
                //     return;
                // }
                // const requestBody = {
                //     name: values.fullName,
                //     email: values.email,
                //     phone: values.phone,
                //     message: values.message,
                //     captcha,
                // };
                // const request: Response<null> = await generalRequest(
                //     "/api/mail",
                //     "post",
                //     JSON.stringify(requestBody),
                // );
                // if (request.error) {
                //     return toast({
                //         title: "Erro",
                //         description: request.payload.message,
                //         variant: "destructive",
                //     });
                // }
                // setSubmitting(false);
                // return toast({
                //     title: "Sucesso",
                //     description: request.payload.message,
                // });
            }}
        >
            {({ errors, touched, isSubmitting }) => (
                <Form className="flex w-full max-w-xl flex-col gap-8 lg:max-w-none lg:gap-2">
                    <div className="grid w-full grid-cols-1 gap-x-8 gap-y-0 lg:grid-cols-2 lg:grid-rows-3 lg:gap-y-2">
                        <div className="lg:col-start-1">
                            <label
                                htmlFor="fullName"
                                className="block text-sm font-semibold leading-6 text-foreground after:text-destructive after:content-['*']"
                            >
                                Nome completo
                            </label>
                            <InputRoot className="h-auto w-full">
                                <InputField
                                    className=""
                                    id="fullName"
                                    name="fullName"
                                    type="text"
                                    placeholder="Full Name"
                                />
                                <InputError
                                    error={errors.fullName}
                                    touched={touched.fullName}
                                />
                            </InputRoot>
                        </div>

                        <div className="lg:col-start-1">
                            <label
                                htmlFor="email"
                                className="block text-sm font-semibold leading-6 text-foreground after:text-destructive after:content-['*']"
                            >
                                Email
                            </label>
                            <InputRoot className="h-auto  w-full">
                                <InputField
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="email@example.com"
                                />
                                <InputError
                                    touched={touched.email}
                                    error={errors.email}
                                />
                            </InputRoot>
                        </div>

                        <div className="lg:col-start-1">
                            <label
                                htmlFor="phone"
                                className="block text-sm font-semibold leading-6 text-foreground after:text-destructive after:content-['*']"
                            >
                                Telefone
                            </label>
                            <InputRoot className="h-auto  w-full">
                                <InputField
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    placeholder="+XX XX XXXXXXXXX"
                                />
                                <InputError
                                    touched={touched.phone}
                                    error={errors.phone}
                                />
                            </InputRoot>
                        </div>

                        <div className="lg:col-start-2 lg:row-span-3 lg:row-start-1 lg:flex lg:flex-col">
                            <label
                                htmlFor="message"
                                className="block text-sm font-semibold leading-6 text-foreground  after:text-destructive after:content-['*']"
                            >
                                Mensagem
                            </label>
                            <InputRoot className="w-full">
                                <InputField
                                    id="message"
                                    name="message"
                                    type="text"
                                    className="h-full"
                                />
                                <InputError
                                    touched={touched.message}
                                    error={errors.message}
                                />
                            </InputRoot>
                        </div>
                    </div>
                    <div className="mx-auto flex min-h-[1.5rem] w-fit flex-col items-center justify-around gap-8 lg:col-span-2 lg:w-full lg:flex-row">
                        <div>
                            <ReCAPTCHA
                                sitekey="6LdKXAQnAAAAACPuXut3CuC3zV2ZB2V6aoDhDdeG"
                                ref={recaptchaRef}
                                onChange={handleCaptcha}
                                onExpired={resetCaptcha}
                                className="lg:justify-self-center"
                            />
                            <div className="min-h-[1.5rem]">
                                {captchaError && (
                                    <span className="text-destructive">
                                        Obrigatório
                                    </span>
                                )}
                            </div>
                        </div>
                        <div className="w-fit pb-6">
                            <Button
                                type="submit"
                                className={cn(
                                    "w-40",
                                    isSubmitting && "cursor-wait",
                                )}
                                loading={isSubmitting}
                                disabled={
                                    isSubmitting ||
                                    Object.keys(errors).length > 0 ||
                                    captchaError
                                }
                            >
                                Enviar
                            </Button>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    );
}
