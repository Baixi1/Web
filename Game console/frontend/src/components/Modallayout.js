import React from "react";
import ModalAndPin from "./Modalandpin";

function Pinlayout() {
    return(
        <div style={styles.pin_container}>
            <ModalAndPin size='small'/>
            <ModalAndPin size='medium'/>
            <ModalAndPin size='large'/>
        </div>
    )
}

const styles = {
    pin_container: {
        margin: 0,
        padding: 0,
        width: '80vw',
        backgroundColor: '#C961DE',
        position: 'absolute',
        left: '50%',
        transfrom: 'translateX(-50%)',
        display: 'grid',
        gridTemplateColoums: 'repeat(auto-fill, 250px)',
        gridAutoRows: '10px'
    }
}

export default Pinlayout;