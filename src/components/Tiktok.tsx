import { ITiktok } from "../types/data";


interface ITiktokProps extends ITiktok {
    removeCard: (id: number) => void;
    toggleCard: (id: number) => void;

}

const Tiktok: React.FC<ITiktokProps> = (props) => {
    const {id, name, video, description, complete, removeCard, toggleCard} = props;
    return <div className="card">

        <h1 style={{textAlign: 'center'}}>{name}</h1>
        <video src={video} width={300} height={400} controls/>
        <p>{description}</p>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <button onClick={() => removeCard(id)} className="btn-delete">X</button>
        <label className="label-checkbox">
        <input onChange={() => toggleCard(id)} className="visually-hidden" type="checkbox" checked={complete}/>
        <span className="span-checkbox"></span>
        </label>
        </div>


    </div>
}

export {Tiktok}