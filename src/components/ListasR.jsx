
const List = () => {
   const items = [{
      id: 1,
      name : 'Carlos'
   },
   {
      id: 2,
      name: 'João'
   },{
      id: 3,
      name: 'May'
   }
]
   return(
      <div>
         {items.map((item) => (
            <p key={item.id}>{item.id} {item.name}</p>
         ))}
      </div>
   )
}

export default List