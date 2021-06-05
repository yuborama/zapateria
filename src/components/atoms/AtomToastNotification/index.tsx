import styled from "@emotion/styled";
import { FC } from "react";
import { useToasts } from "react-toast-notifications";

type AtomToastNoticationProps = {
  content?: string;
};

const AtomToastNotication: FC<AtomToastNoticationProps> = (props) => {
  const { content } = props;
  const { addToast } = useToasts();
  return (
    <div>
      <button
        onClick={() =>
          addToast(content, {
            appearance: "success",
            autoDismiss: true,
          })
        }
      >
        Add Toast
      </button>
    </div>
  );
};

export default AtomToastNotication;
