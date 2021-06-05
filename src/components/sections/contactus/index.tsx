import AtomButton from "@Src/components/atoms/AtomButton";
import AtomContainer from "@Src/components/atoms/AtomContainer";
import AtomInput from "@Src/components/atoms/AtomInput";
import AtomTextBody from "@Src/components/atoms/AtomTextBody";
import AtomTextTittle from "@Src/components/atoms/AtomTextTittle";
import AtomToastNotication from "@Src/components/atoms/AtomToastNotification";
import AtomWrapper from "@Src/components/atoms/AtomWrapper";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation, gql } from "@apollo/client";
import React, { FC } from "react";
import { useToasts } from "react-toast-notifications";

interface FormValues {
  name: string;
  subject: string;
  email: string;
  message: string;
}

const initialValues: FormValues = {
  name: "",
  subject: "",
  email: "",
  message: "",
};

const NEW_CONTACT = gql`
  mutation($input: ContactInput) {
    newContact(input: $input)
  }
`;

const SectionContact: FC = () => {
  const [newUser] = useMutation(NEW_CONTACT);
  const { addToast } = useToasts();

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      name: Yup.string().required("Por favor, ingrese un Nombre."),
      subject: Yup.string().required("Por favor, ingrese un Sujeto."),
      email: Yup.string()
        .email("Debe ingresar un correo válido")
        .required("Por favor, ingrese un correo."),
      message: Yup.string().required("Por favor, ingrese un Mensage."),
    }),
    onSubmit: async (valores) => {
      await newUser({
        variables: {
          input: valores,
        },
      })
        .catch((error) => {
          throw new Error(error.message);
        })
        .then(() => {
          location.href = "/";
          addToast("Se envio con exito su mensaje", {
            appearance: "success",
            autoDismiss: true,
          });
        });
    },
  });
  return (
    <>
      <AtomContainer
        backgroudColor="#252628"
        id="Contacto"
        padding="106px 90px 65px 90px"
        justifyContent="space-between"
      >
        <AtomWrapper width="50%" flexDirection="column">
          <AtomTextTittle color="#FFFFFF" as="h2">
            Nosotros
          </AtomTextTittle>
          <AtomTextBody color="#FFFFFF" size="24px">
            Las mejores marcas del mercado disponible para ti, al alcance de un
            click y con los mejores precios.
          </AtomTextBody>
          <AtomTextBody color="#FFFFFF">
            Tenemos sucursales en toda barranquilla para que puedas comprar tu
            calzado sin tener que tomar una larga distancia.
          </AtomTextBody>
          <form onSubmit={formik.handleSubmit}>
            <AtomWrapper width="100%" flexwrap="wrap">
              <AtomInput
                id="name"
                formik={formik}
                label="Nombre"
                colorLabel="#FFFFFF"
                margin="0px 30px 0px 0px"
              />
              <AtomInput
                id="subject"
                formik={formik}
                label="Asunto"
                colorLabel="#FFFFFF"
              />
              <AtomInput
                id="email"
                formik={formik}
                width="90%"
                label="Email"
                colorLabel="#FFFFFF"
              />
              <AtomInput
                id="message"
                formik={formik}
                width="90%"
                label="Mensaje"
                colorLabel="#FFFFFF"
                type="textbox"
              />
              {/* <AtomToastNotication content="xxxxxxx" /> */}
              <AtomButton type="submit" color="#38A6AD" padding="16px 20px">
                <AtomTextBody size="16px" color="#FFFFFF">
                  Enviar
                </AtomTextBody>
              </AtomButton>
            </AtomWrapper>
          </form>
        </AtomWrapper>
        <AtomWrapper width="40%" height="500px" backgroudColor="#FFFFFF">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5952.963794485465!2d-72.46293940736108!3d7.819421610246637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6646f20b0c8203%3A0xed2c8647e9c072b0!2sConjunto%20Cerrado%20PORTAL%20DE%20SAN%20NICOL%C3%81S!5e0!3m2!1sen!2sco!4v1622257769271!5m2!1sen!2sco"
            width="100%"
            height="100%"
            loading="lazy"
          />
        </AtomWrapper>
      </AtomContainer>
    </>
  );
};

export default SectionContact;
