import Layer1 from "./Layer1";

function Layer2(){
    return(
        <div className="bg-info p-2">
            <h1>This is Layer 2</h1>
            <Layer1 />
        </div>
    );
};

export default Layer2;