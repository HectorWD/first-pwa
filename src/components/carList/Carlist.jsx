import { useState } from "react"

const Carlist = () => {
    const Listado = ['Manzana', 'Mayonesa', 'Cebolla', 'Limon']
    const [carrito, setCarrito] = useState(Listado)
    const [list, setList] = useState('')

    const handleChange = (e) => {
        setList(e.target.value)
    }
    const addList = (e) => {
        e.preventDefault()
        setCarrito((oldCarrito) => [...oldCarrito, list]);
        setList('')
        console.log('Producto añadido')
    }

    return (
        <div>
            <h1>Listado de productos V3</h1>

            <form onSubmit={(e) => addList(e)}>
                <input placeholder="Nombre del producto" onChange={(e) => handleChange(e)} value={list} /><br />
                <button type="submit">Agregar</button>
                {Listado.length !== 0 ?
                    <ul>
                        {carrito.map((producto, key) => <li key={key}> {producto} </li>)}
                    </ul> :
                    'Carrito vacio'
                }
            </form>
        </div>
    )
}
export default Carlist;