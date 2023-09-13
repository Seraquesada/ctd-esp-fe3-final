import * as yup from "yup";

export const schema = yup.object().shape({
    customer: yup.object().shape({
        name: yup.string().required("Este campo es requerido").min(2, "Mínimo 2 caracteres"),
        lastname: yup.string().required("Este campo es requerido").min(2, "Mínimo 2 caracteres").max(10, "Máximo 10 caracteres"),
        email: yup.string().required("Este campo es requerido").email("El correo no es válido").matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Debe ser un email valido"),
        address: yup.object().shape({
            address1: yup.string().required("Este campo es requerido"),
            address2: yup.string().required("Este campo es requerido"),
            city: yup.string().required("Este campo es requerido"),
            state: yup.string().required("Este campo es requerido"),
            zipCode: yup.string().required("Este campo es requerido"),
        }),
    }),
    card: yup.object().shape({
        number: yup.string().required("Este campo es requerido"),
        cvc: yup.string().required("Este campo es requerido"),
        expDate: yup.string().required("Este campo es requerido"),
        nameOnCard: yup.string().required("Este campo es requerido"),
    }),
    order: yup.object().shape({
        name: yup.string().required("Este campo es requerido"),
        image: yup.string().required("Este campo es requerido"),
        price: yup.number().required("Este campo es requerido"),
    }),
});