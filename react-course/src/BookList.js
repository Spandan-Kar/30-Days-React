import Book from "./Book";
import booksjson from "./books.json"
const books= booksjson

export default function BookList(){
    return (
        <div>
            {books.map((element)=>{
                return <Book 
                image={element.image} 
                title= {element.title} 
                publisher= {element.publisher} 
                price={element.price}/>
            })}
            
            
        </div>
    );
}