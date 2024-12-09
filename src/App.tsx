import { useState } from "react";
import { ITiktok } from "./types/data";
import { TiktokList } from "./components/TiktokList";

const App: React.FC = () => {
    const [value, setValue] = useState('')
    const [value1, setValue1] = useState('')
    const [video, setVideo] = useState<string | null>(null)
    const [tiktoks, setTiktoks] = useState<ITiktok[]>([])


    const handlerChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value)
    }
    const handlerChange1: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue1(e.target.value)
    }

    const handlerChangeVideo: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const input = e.target
        if(!input.files?.length) {
            return;        }
        const file = input.files[0]
        setVideo(URL.createObjectURL(file));
    }

    const addTiktok = () => {
        if (value && video) {
            setTiktoks([...tiktoks, {
                id: Date.now(),
                name: value,
                video: video,
                description: value1,
                complete: false
            }])
        }
        setValue('')
        setValue1('')
        setVideo(null)
    }

    const removeCard = (id: number): void => {
        setTiktoks(tiktoks.filter(tiktok => tiktok.id !== id))
    }

    const toggleCard = (id: number): void => {
        setTiktoks(tiktoks.map(tiktok => {
            if (tiktok.id !== id) return tiktok;
            return {
                ...tiktok,
                complete: !tiktok.complete
            }
        }))
    }
    return <div>

        <form className="form">
            <fieldset className="fieldset">
                <label>
                    <label>Название</label>
                    <input value={value} onChange={handlerChange}/>
                </label>
                <label>
                    <label>Загрузите видео</label>
                    <input type="file" accept="video/*" onChange={handlerChangeVideo}/>
                </label>
                <label>
                    <label>Описание</label>
                    <input value={value1} onChange={handlerChange1}/>
                </label>
                <button onClick={addTiktok} type="button" className="btn">Создать</button>
            </fieldset>
        </form>

        <TiktokList items={tiktoks} removeCard={removeCard} toggleCard={toggleCard}/>

    </div>
}

export {App}