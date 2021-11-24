function Searchbox({movies,setSearchtTerm}){
 



    return(
        <div className="Searchbox">
            <input type="text"
            placeholder= "Search..."

            onChange={(event)=>{ setSearchtTerm( event.target.value);}}/>


        </div>

        )
}
export default  Searchbox