const Contact=()=>{
    return(
        <div>
            <h1 className="p-4 m-4 text-3xl font-bold">Contact Us</h1>
            <form>
                <input type="text" className="p-2 m-2 border border-black" placeholder="name"/>
                <input type="text" className="p-2 m-2 border border-black" placeholder="message"/>
                <button className="rounded-lg border border-black bg-black text-white p-2 m-2 hover:bg-red-700">Submit</button>
            </form>
        </div>
    )
}
export default Contact;