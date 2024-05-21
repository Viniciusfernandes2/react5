
import Quina from "../components/Quina";

import Megasena from "../components/Megasena";
import { useLoteria } from "../hooks";
import "./index.css";

export default function Principal() {
  const { megasena } = useLoteria();

  return (
    <>
      {megasena.dataApuracao ? (
        <div className="principal-bloco">
          <Megasena />

          <Quina />
        </div>
      ) : (
        <div className="principal-carregando">
          <h3>Carregando...</h3>
        </div>
      )}
    </>
  );
}
