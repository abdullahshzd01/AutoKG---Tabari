import '../App.css';
import React, { useState } from 'react';

let base_url = 'http://localhost:7200/repositories/Tabari_repo?query=';
// let base_url = 'http://3.91.59.90:7200/repositories/A2?query=';

export const ButtonQuery = () => {

    let displayText = {
        fontSize: "30px",
        color: "white",
        textAlign: "center",
        font: "Bitstream Cyberbit"
    }

    {
        let theme_query = `PREFIX : <http://www.tafsirtabari.com/ontology#> PREFIX W3:<http://www.w3.org/1999/02/22-rdf-syntax-ns#> PREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#> select DISTINCT ?l ?location where {?l:hasName ?location. ?l rdf:type :Location.}`;
        let query = encodeURIComponent(theme_query);

        let url = base_url + query + '&format=application%2Fsparql-results%2Bjson&timeout=0'

        fetch(url)
            .then(async response => {
                console.log(response.status, " | ", response.statusText, " | ", typeof (response));
                console.log(response);

                try {
                    const data = await response.text();

                    // console.log("Response:\n", data);
                    
                    var arr = data.split('\n');
                    var arr2 = [];
        
                    for (let i = 0; i < arr.length; i++) {
                        arr2[i] = arr[i].split(',');
                    }

                    var disp = [];

                    for (let i = 1; i < arr.length-1; i++){
                        disp[i] = arr2[i][1];
                    }
                    
                    var temp = "";
                    var i = 1;

                    disp.forEach((x) => {
                        temp += "<tr>";
                        temp += "<td>" + x + "</td>";
                        temp += "<td> " + i++ + " </td>";
                        temp += "</tr>"
                    });
                    
                    document.getElementById('root1').innerHTML += temp;

                }
                catch (error) {
                    console.log('Rola pae gaya!');
                    console.log("Error => ", error);

                    document.getElementById('root1').innerHTML = "Error => " + error;
                }
            })
            .catch(error => {
                console.log('Rola pae gaya!');
                console.log("Error => ", error);

                document.getElementById('root1').innerHTML = "Error => " + error;
            })
    }

    {
        let theme_query = `PREFIX : <http://www.tafsirtabari.com/ontology#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
select DISTINCT ?k ?poetry  where {?k rdf:type :Poetry. ?k :hasText ?poetry}
`;
        let query = encodeURIComponent(theme_query);

        let url = base_url + query + '&format=application%2Fsparql-results%2Bjson&timeout=0'

        fetch(url)
            .then(async response => {
                console.log(response.status, " | ", response.statusText, " | ", typeof (response));
                console.log(response);

                try {
                    const data = await response.text();

                    // console.log("Response:\n", data);

                    // let res = JSON.parse(data);

                    var arr = data.split('\n');
                    var arr2 = [];
        
                    for (let i = 0; i < arr.length; i++) {
                        arr2[i] = arr[i].split(',');
                    }

                    var disp = [];

                    for (let i = 1; i < arr.length-1; i++){
                        disp[i] = arr2[i][1];
                    }

                    console.log("disp[0] = > ", disp[0])
                    console.log("disp,length = > ", disp.length)

                    var temp = "";
                    var i = 1;

                    disp.forEach((x) => {
                        temp += "<tr>";
                        temp += "<td>" + x + " </td>";
                        temp += "<td> " + i++ + " </td>";
                        temp += "</tr>"

                        if (i === disp.length) {
                            
                        }
                        // i++;
                    });

                    // for (let index = 0; index < disp.length; index++) {
                    //     temp += "<tr>";
                    //     temp += "<td>" + disp[index] + " </td>";
                    //     temp += "<td>" + i++ + " </td>";
                    //     temp += "</tr>"
                        
                    // }
                    
                    document.getElementById('root2').innerHTML += temp;
                }
                catch (error) {
                    console.log('Rola pae gaya!');
                    console.log("Error => ", error);

                    document.getElementById('root2').innerHTML = "Error => " + error;
                }
            })
            .catch(error => {
                console.log('Rola pae gaya!');
                console.log("Error => ", error);

                document.getElementById('root2').innerHTML = "Error => " + error;
            })
    }

    {
        let theme_query = `PREFIX : <http://www.tafsirtabari.com/ontology#> PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> select ?Narrator ?k where {?k rdf:type :Narrator. ?k :hasName ?Narrator.}`;
        let query = encodeURIComponent(theme_query);

        let url = base_url + query + '&format=application%2Fsparql-results%2Bjson&timeout=0'

        fetch(url)
            .then(async response => {
                console.log(response.status, " | ", response.statusText, " | ", typeof (response));
                console.log(response);

                try {
                    const data = await response.text();

                    // console.log("Response:\n", data);
                    
                    var arr = data.split('\n');
                    var arr2 = [];
        
                    for (let i = 0; i < arr.length; i++) {
                        arr2[i] = arr[i].split(',');
                    }

                    var disp = [];

                    for (let i = 1; i < arr.length-1; i++){
                        disp[i] = arr2[i][0];
                    }
                    
                    var temp = "";
                    var i = 1;

                    disp.forEach((x) => {
                        temp += "<tr>";
                        temp += "<td>" + x + "</td>";
                        temp += "<td> " + i++ + " </td>";
                        temp += "</tr>"
                    });
                    
                    document.getElementById('root3').innerHTML += temp;

                }
                catch (error) {
                    console.log('Rola pae gaya!');
                    console.log("Error => ", error);

                    document.getElementById('root3').innerHTML = "Error => " + error;
                }
            })
            .catch(error => {
                console.log('Rola pae gaya!');
                console.log("Error => ", error);

                document.getElementById('root3').innerHTML = "Error => " + error;
            })
    }

    {
        let theme_query = `PREFIX : <http://www.tafsirtabari.com/ontology#> PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> select DISTINCT ?org ?organization where {?org rdf:type :Organization. ?org :hasName ?organization}`;
        let query = encodeURIComponent(theme_query);

        let url = base_url + query + '&format=application%2Fsparql-results%2Bjson&timeout=0'

        fetch(url)
            .then(async response => {
                console.log(response.status, " | ", response.statusText, " | ", typeof (response));
                console.log(response);

                try {
                    const data = await response.text();

                    // console.log("Response:\n", data);
                    
                    var arr = data.split('\n');
                    var arr2 = [];
        
                    for (let i = 0; i < arr.length; i++) {
                        arr2[i] = arr[i].split(',');
                    }

                    var disp = [];

                    for (let i = 1; i < arr.length-1; i++){
                        disp[i] = arr2[i][1];
                    }
                    
                    var temp = "";
                    var i = 1;

                    disp.forEach((x) => {
                        temp += "<tr>";
                        temp += "<td>" + x + "</td>";
                        temp += "<td> " + i++ + " </td>";
                        temp += "</tr>"
                    });
                    
                    document.getElementById('root4').innerHTML += temp;

                }
                catch (error) {
                    console.log('Rola pae gaya!');
                    console.log("Error => ", error);

                    document.getElementById('root4').innerHTML = "Error => " + error;
                }
            })
            .catch(error => {
                console.log('Rola pae gaya!');
                console.log("Error => ", error);

                document.getElementById('root4').innerHTML = "Error => " + error;
            })
    }

    {
        let theme_query = `PREFIX : <http://www.tafsirtabari.com/ontology#> PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> select DISTINCT ?k ?otherName where {?k rdf:type :Other. ?k :hasName ?otherName}`;
        let query = encodeURIComponent(theme_query);

        let url = base_url + query + '&format=application%2Fsparql-results%2Bjson&timeout=0'

        fetch(url)
            .then(async response => {
                console.log(response.status, " | ", response.statusText, " | ", typeof (response));
                console.log(response);

                try {
                    const data = await response.text();

                    // console.log("Response:\n", data);
                    
                    var arr = data.split('\n');
                    var arr2 = [];
        
                    for (let i = 0; i < arr.length; i++) {
                        arr2[i] = arr[i].split(',');
                    }

                    var disp = [];

                    for (let i = 1; i < arr.length-1; i++){
                        disp[i] = arr2[i][1];
                    }
                    
                    var temp = "";
                    var i = 1;

                    disp.forEach((x) => {
                        temp += "<tr>";
                        temp += "<td>" + x + "</td>";
                        temp += "<td> " + i++ + " </td>";
                        temp += "</tr>"
                    });
                    
                    document.getElementById('root5').innerHTML += temp;

                }
                catch (error) {
                    console.log('Rola pae gaya!');
                    console.log("Error => ", error);

                    document.getElementById('root5').innerHTML = "Error => " + error;
                }
            })
            .catch(error => {
                console.log('Rola pae gaya!');
                console.log("Error => ", error);

                document.getElementById('root5').innerHTML = "Error => " + error;
            })
    }

    {
        let theme_query = `PREFIX : <http://www.tafsirtabari.com/ontology#> 
        PREFIX W3:<http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
        select DISTINCT ?person ?names where {?person :hasName ?names. ?person W3:type :Person}
        `;
        let query = encodeURIComponent(theme_query);

        let url = base_url + query + '&format=application%2Fsparql-results%2Bjson&timeout=0'

        fetch(url)
            .then(async response => {
                console.log(response.status, " | ", response.statusText, " | ", typeof (response));
                console.log(response);

                try {
                    const data = await response.text();

                    // console.log("Response:\n", data);
                    
                    var arr = data.split('\n');
                    var arr2 = [];
        
                    for (let i = 0; i < arr.length; i++) {
                        arr2[i] = arr[i].split(',');
                    }

                    var disp = [];

                    for (let i = 1; i < arr.length-1; i++){
                        disp[i] = arr2[i][1];
                    }
                    
                    var temp = "";
                    var i = 1;

                    disp.forEach((x) => {
                        temp += "<tr>";
                        temp += "<td>" + x + "</td>";
                        temp += "<td> " + i++ + " </td>";
                        temp += "</tr>"
                    });
                    
                    document.getElementById('root6').innerHTML += temp;

                }
                catch (error) {
                    console.log('Rola pae gaya!');
                    console.log("Error => ", error);

                    document.getElementById('root6').innerHTML = "Error => " + error;
                }
            })
            .catch(error => {
                console.log('Rola pae gaya!');
                console.log("Error => ", error);

                document.getElementById('root6').innerHTML = "Error => " + error;
            })
    }

    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const [show5, setShow5] = useState(false);
    const [show6, setShow6] = useState(false);

    function ClearShow()
    {
        if (show1 === true)
        {
            setShow1(false);
        }
        if (show2 === true)
        {
            setShow2(false);
        }
        if (show3 === true)
        {
            setShow3(false);
        }
        if (show4 === true)
        {
            setShow4(false);
        }
        if (show5 === true)
        {
            setShow5(false);
        }
        if (show6 === true)
        {
            setShow6(false);
        }
    }

    return (
        <div className='container my-4'>
            <h3>This is Button Query Portion</h3>

            <div className="container my-4">
                <button type="button" className="clr-btn btn-sm" onClick={() => ClearShow()}>Clear</button>

                <button type="button" className="btn btn-sm btn-outline-info btn-my-styleBQ" onClick={() => setShow1(!show1)}>Distinct Locations</button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button type="button" className="btn btn-sm btn-outline-info btn-my-styleBQ" onClick={() => setShow2(!show2)}>Distinct Poetry</button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button type="button" className="btn btn-sm btn-outline-info btn-my-styleBQ" onClick={() => setShow3(!show3)}>Distinct Narrators</button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button type="button" className="btn btn-sm btn-outline-info btn-my-styleBQ" onClick={() => setShow4(!show4)}>Distinct Organizations</button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button type="button" className="btn btn-sm btn-outline-info btn-my-styleBQ" onClick={() => setShow5(!show5)}>Distinct Others</button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button type="button" className="btn btn-sm btn-outline-info btn-my-styleBQ" onClick={() => setShow6(!show6)}>Distinct Persons</button>
                
                {
                    show1 ?
                        <div className="my-4" style={displayText}>
                            <table className='tableCenter'>
                                <thead>
                                    <tr>
                                        <th colSpan={2}>Distinct Locations</th>
                                    </tr>
                                </thead>
                                <tbody id="root1"></tbody>
                            </table>
                        </div>
                    :
                        null
                }

                {
                    show2 ?
                        <div className="my-4" style={displayText}>
                            <table className='tableCenter' border={3}>
                                <thead>
                                    <tr>
                                        <th colSpan={2}>Distinct Poetry</th>
                                    </tr>
                                </thead>
                                <tbody id="root2"></tbody>
                            </table>
                        </div>
                    :
                        null
                }

                {
                    show3 ?
                        <div className="my-4" style={displayText}>
                            <table className='tableCenter' border={3}>
                                <thead>
                                    <tr>
                                        <th colSpan={2}>Distinct Narrators</th>
                                    </tr>
                                </thead>
                                <tbody id="root3"></tbody>
                            </table>
                        </div>
                    :
                        null
                }

                {
                    show4 ?
                        <div className="my-4" style={displayText}>
                            <table className='tableCenter' border={3}>
                                <thead>
                                    <tr>
                                        <th colSpan={2}>Distinct Organizations</th>
                                    </tr>
                                </thead>
                                <tbody id="root4"></tbody>
                            </table>
                        </div>
                    :
                        null
                }

                {
                    show5 ?
                        <div className="my-4" style={displayText}>                            
                            <table className='tableCenter' border={3}>
                                <thead>
                                    <tr>
                                        <th colSpan={2}>Distinct Others</th>
                                    </tr>
                                </thead>
                                <tbody id="root5"></tbody>
                            </table>
                        </div>
                    :
                        null
                }

                {
                    show6 ?
                        <div className="my-4" style={displayText}>
                            <table className='tableCenter' border={3}>
                                <thead>
                                    <tr>
                                        <th colSpan={2}>Distinct Persons</th>
                                    </tr>
                                </thead>
                                <tbody id="root6"></tbody>
                            </table>
                        </div>
                    :
                        null
                }
            </div>
        </div>
    )
}
