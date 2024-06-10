import { useCallback, useEffect, useRef, useState } from 'react'

export default function Password() {
    const [length, setLength] = useState(3);

    const passwordRef = useRef(null);

    const [character, setCharacter] = useState(false);

    const [number, setNumber] = useState(false);

    const [password, setPassword] = useState("");

    const passwordRender = useCallback(() => {
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if (character) {
            str += "!@@~#$%^^&*())";
        }

        if (number) {
            str += "0123456789";
        }

        for (let i = 0; i <= length; i++) {
            const makePassword = Math.floor(Math.random() * str.length + 1);
            pass += str.charAt(makePassword);
        }

        setPassword(pass);

    }, [length, character, number, setPassword]);

    const copyToClipBoard = () => {
        passwordRef.current?.select();
        window.navigator.clipboard.writeText(password);
    }

    useEffect(() => {
        passwordRender();
    }, [length, number, character]);

    // console.clear()
    return (
        <div>
            <h1>Password Generator</h1>
            <input
                type="text"
                value={password}
                ref={passwordRef}
                placeholder='Password'
                readOnly
            />
            <button type="button" onClick={copyToClipBoard}>Copy</button>
            <br />
            <br />
            <input
                type="range"
                min={3}
                max={140}
                style={{ cursor: "pointer" }}
                onChange={(e) => setLength(e.target.value)}
            />
            <br />
            <br />
            <label >Length: {length}</label>
            <div>
                <input
                    type="checkbox"
                    defaultChecked={character}
                    onChange={() => setCharacter(prev => !prev)}
                />
                <label >Character</label>
                <input
                    type="checkbox"
                    defaultChecked={number}
                    onChange={() => setNumber(prev => !prev)}
                />
                <label >Number</label>
                <button type="button" onClick={passwordRender}>Generate</button>
            </div>
        </ div>

    )
}