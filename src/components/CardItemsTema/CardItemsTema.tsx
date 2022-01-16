import { Topic } from 'common/types';
import Button from 'components/Button/Button';
import { Link } from 'react-router-dom';
import './CardItemsTema.scss';
const CardItemsTema = ({ temas }: { temas: Topic[] }) => {
  return (
    <>
      {temas.map((tema) => {
        return (
          <div className="row border p-3 carditem my-2">
            <div className="col-9 px-3">
              <h5>{tema.title}</h5>
              <p>{tema.description}</p>
            </div>
            <div className="col-3 list-group justify-content-center px-3 btnlistgroup">
              <button
                className="col-12 list-group-item list-group-item-action btnitem text-center p-1 m-1 btn btn-primary active "
                type="button"
              >
                Ver
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default CardItemsTema;
