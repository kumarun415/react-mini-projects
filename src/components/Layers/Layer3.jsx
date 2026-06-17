import Layer2 from "./Layer2";
function Layer3(){
    return(
        <div className="bg-danger p-2">
            <h1>This is Layer 3</h1>
            <Layer2 />
        </div>
    );
};

export default Layer3;