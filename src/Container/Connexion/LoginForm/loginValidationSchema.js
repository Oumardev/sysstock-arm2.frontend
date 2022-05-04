import * as Yup from "yup";

/**
 * Description:
 * validation schema object coming from yup
 *  */
const loginValidationSchema = Yup.object({
  username: Yup.string()
    .max(9, "Doit être de 9 caractères")
    .min(9, "Doit être de 9 caractères")
    .required("Champ requis!"),
  password: Yup.string().required("Champ requis!"),
});

export default loginValidationSchema;
