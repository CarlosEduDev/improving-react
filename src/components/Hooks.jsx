import { useState, useEffect } from "react"

const Hooks = () => {
   const [idade, setIdade] = useState(0)

   const handleAge = () =>{
      setIdade(idade + 1)
   }   

   useEffect(() =>{
      console.log('executado')
   }, [idade])

   return(
      <div>
         <hr/><h1 className="text-center">Hooks</h1>
         <p>{idade}</p>
         <button onClick={handleAge}>Aumentar idade</button>
      </div>
   )
}

export default Hooks