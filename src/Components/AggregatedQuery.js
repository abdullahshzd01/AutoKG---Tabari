import React from 'react';
import ReactDOM from 'react-dom/client';
import BarChart from './BarChart';

let base_url = 'http://localhost:7200/repositories/Tabari_repo?query=';
// let base_url = 'http://3.91.59.90:7200/repositories/A2?query=';

class AggregatedQuery extends React.Component {
    createSelectListByNumber(x) {
        let items = [];

        items.push(<option key={0} value={0}>{"All"}</option>);

        for (let i = 1; i <= x; i++) {
            items.push(<option key={i} value={i}>{i}</option>);
        }

        return items;
    }

    createSelectThemeName() {
        let items = [];
        let theme = ['lugha', 'sufism', 'kalam', 'science', 'qiraat', 'adyan', 'israeliyat', 'asbab', 'sirah', 'mushkilat', 'mutashabih', 'fiqh', 'lughq', 'razail', 'adab', 'naskh', 'rajeh', 'tikrar', 'yes', 'luhga', 'takhsis', 'yahudiya', 'sira', 'sufsim', 'sfism', 'scienceterm', 'sciene', 'kalma', 'israeliyaty'];

        items.push(<option key={0} value={0}>{"All"}</option>);

        for (let i = 0; i <= theme.length; i++) {
            items.push(<option key={i + 1} value={theme[i]}>{theme[i]}</option>);
        }

        return items;
    }

    createSelectSubThemeName() {
        let items = [];
        let theme = ['lugha', 'sufism', 'kalam', 'science', 'qiraat', 'adyan', 'israeliyat', 'asbab', 'sirah', 'mushkilat', 'mutashabih', 'fiqh', 'lughq', 'razail', 'adab', 'naskh', 'rajeh', 'tikrar', 'yes', 'luhga', 'takhsis', 'yahudiya', 'sira', 'sufsim', 'sfism', 'scienceterm', 'sciene', 'kalma', 'israeliyaty'];

        items.push(<option key={0} value={0}>{"All"}</option>);

        for (let i = 0; i <= theme.length; i++) {
            items.push(<option key={i + 1} value={theme[i]}>{theme[i]}</option>);
        }

        return items;
    }

    createSelectRtNarratorsByName() {
        let items = [];
        let theme = ['ابن عباس', 'كعب', 'عبيد بن إسماعيل الهباري', 'عبد الرحمن بن سابط', 'الثوري'];

        items.push(<option key={0} value={0}>{"All"}</option>);

        for (let i = 0; i <= theme.length; i++) {
            items.push(<option key={i + 1} value={theme[i]}>{theme[i]}</option>);
        }

        return items;
    }

    createSelectSurahByName() {
        let items = [];
        let Surahs = ['الفاتحة', 'الكهف', 'المطففين', 'التكوير', 'الحجر', 'الماعون', 'النصر', 'المسد', 'الإخلاص', 'البقرة', 'الدخان', 'الصافات', 'الشعراء', 'طه', 'آل_عمران', 'الأعراف', 'النساء', 'ق', 'الزخرف', 'الواقعة', 'الروم', 'العنكبوت', 'ص', 'الناس'];

        items.push(<option key={0} value={0}>{"All"}</option>);

        for (let i = 0; i <= Surahs.length; i++) {
            items.push(<option key={i + 1} value={Surahs[i]}>{Surahs[i]}</option>);
        }

        return items;
    }

    createSelectNarratorByName() {
        let items = [];
        let Narrators = ['محمد بن العلاء', 'بشر بن عمارة', 'يونس بن عبد الأعلى الصدفي', 'ابن وهب', 'ابن أبي مريم'];

        items.push(<option key={0} value={0}>{"All"}</option>);

        for (let i = 0; i <= Narrators.length; i++) {
            items.push(<option key={i + 1} value={Narrators[i]}>{Narrators[i]}</option>);
        }

        return items;
    }

    createSelectOrganizationByName() {
        let items = [];
        let Organizations = ['بني أقيش', 'أصحاب الكهف', 'أهل الكهف', 'أصحاب النبي صلى الله عليه وسلم'];

        items.push(<option key={0} value={0}>{"All"}</option>);

        for (let i = 0; i <= Organizations.length; i++) {
            items.push(<option key={i + 1} value={Organizations[i]}>{Organizations[i]}</option>);
        }

        return items;
    }

    createSelectLocationByName() {
        let items = [];
        let Locations = ['الكهف', 'وادي القرى', 'جبل الكهف', 'مصرا', 'بيت العجاج', 'المدينة', 'أيلة', 'الكوفة', 'البصرة', 'مصر', 'مكة', 'الصفا', 'الشام', 'سوق الضراب', 'الحجاز', 'اليمن', 'عسفان', 'مدينة', 'الطور', 'بناجلوس', 'بنجلوس', 'بيت المقدس', 'الروم', 'جنديسابور', 'العراق', 'أفسوس', 'مدينة أفسوس', 'فارس', 'بابل', 'أرمينية', 'الكعبة', 'طنجة', 'أذربيجان', 'البيت', 'مقام إبراهيم', 'الحرم', 'بيت الله', 'عرفة', 'المزدلفة'];

        items.push(<option key={0} value={0}>{"All"}</option>);

        for (let i = 0; i <= Locations.length; i++) {
            items.push(<option key={i + 1} value={Locations[i]}>{Locations[i]}</option>);
        }

        return items;
    }

    // [empty, 'الفاتحة', 'الكهف', 'المطففين', 'التكوير', 'الحجر', 'الماعون', 'النصر', 'المسد', 'الإخلاص', 'البقرة', 'الدخان', 'الصافات', 'الشعراء', 'طه', 'آل_عمران', 'الأعراف', 'النساء', 'ق', 'الزخرف', 'الواقعة', 'الروم', 'العنكبوت', 'ص', 'الناس']

    clearGraphs = () => {
        
        document.getElementById('graph_qry1').innerHTML = "";
		document.getElementById('graph_qry2').innerHTML = "";
		document.getElementById('graph_qry3').innerHTML = "";
		document.getElementById('graph_qry4').innerHTML = "";
		document.getElementById('graph_qry5').innerHTML = "";
		document.getElementById('graph_qry6').innerHTML = "";
		// document.getElementById('graph_qry7').innerHTML = "";
		document.getElementById('graph_qry8').innerHTML = "";
		// document.getElementById('graph_qry9').innerHTML = "";
		// document.getElementById('graph_qry10').innerHTML = "";
        document.getElementById('graph_qry11').innerHTML = "";
		document.getElementById('graph_qry12').innerHTML = "";
		document.getElementById('graph_qry13').innerHTML = "";
		document.getElementById('graph_qry14').innerHTML = "";
		document.getElementById('graph_qry15').innerHTML = "";
		document.getElementById('graph_qry16').innerHTML = "";
		document.getElementById('graph_qry17').innerHTML = "";
		document.getElementById('graph_qry18').innerHTML = "";
		document.getElementById('graph_qry19').innerHTML = "";
		document.getElementById('graph_qry20').innerHTML = "";
		document.getElementById('graph_qry21').innerHTML = "";
		document.getElementById('graph_qry22').innerHTML = "";
		document.getElementById('graph_qry23').innerHTML = "";
		document.getElementById('graph_qry24').innerHTML = "";
		document.getElementById('graph_qry25').innerHTML = "";
		document.getElementById('graph_qry26').innerHTML = "";
		document.getElementById('graph_qry27').innerHTML = "";
		document.getElementById('graph_qry28').innerHTML = "";
		document.getElementById('graph_qry29').innerHTML = "";
    }

    clearQueries = () => {

        document.getElementById('rslt_qry1').innerHTML = "";
        document.getElementById('rslt_qry2').innerHTML = "";
        document.getElementById('rslt_qry3').innerHTML = "";
        document.getElementById('rslt_qry4').innerHTML = "";
        document.getElementById('rslt_qry5').innerHTML = "";
        document.getElementById('rslt_qry6').innerHTML = "";
        document.getElementById('rslt_qry7').innerHTML = "";
        document.getElementById('rslt_qry8').innerHTML = "";
        document.getElementById('rslt_qry9').innerHTML = "";
        document.getElementById('rslt_qry10').innerHTML = "";
        document.getElementById('rslt_qry11').innerHTML = "";
        document.getElementById('rslt_qry12').innerHTML = "";
        document.getElementById('rslt_qry13').innerHTML = "";
        document.getElementById('rslt_qry14').innerHTML = "";
        document.getElementById('rslt_qry15').innerHTML = "";
        document.getElementById('rslt_qry16').innerHTML = "";
        document.getElementById('rslt_qry17').innerHTML = "";
        document.getElementById('rslt_qry18').innerHTML = "";
        document.getElementById('rslt_qry19').innerHTML = "";
        document.getElementById('rslt_qry20').innerHTML = "";
        document.getElementById('rslt_qry21').innerHTML = "";
        document.getElementById('rslt_qry22').innerHTML = "";
        document.getElementById('rslt_qry23').innerHTML = "";
        document.getElementById('rslt_qry24').innerHTML = "";
        document.getElementById('rslt_qry25').innerHTML = "";
        document.getElementById('rslt_qry26').innerHTML = "";
        document.getElementById('rslt_qry27').innerHTML = "";
        document.getElementById('rslt_qry28').innerHTML = "";
        document.getElementById('rslt_qry29').innerHTML = "";
    }

    clear = () => {

        this.clearQueries();
        this.clearGraphs();
    }

    /* -------------------------------- Queries -------------------------------- */

    Query1 = (event) => {
        event.preventDefault();
        // console.log("Query1 event.target[0].value: ", event.target[0].value);

        var variable = event.target[0].value;

        document.getElementById('rslt_qry1').innerHTML = "";
        document.getElementById('graph_qry1').innerHTML = "";

        {
            console.log("Query1 Processing");
            let theme_query;

            if (variable === '0')          // for all
            {
                theme_query = `PREFIX : <http://www.tafsirtabari.com/ontology#>
                PREFIX W3:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                
                select ?Surah_No ?section_count(count( distinct ?section) as ?section_count) 
                
                where {
                    
                    ?section rdf:type :Section.
                    
                    ?section :isAbout ?Verse_Fragement.
                    
                    ?Verse_Fragement rdf:type :VerseFragment.
                    
                    ?Verse_Fragement :isPartOfVerse ?Verse.
                    
                    ?Surah :containsVerse ?Verse.
                 
                
                    ?Surah rdf:type :Surah.
                    
                    ?Surah :hasSurahNo ?Surah_No.
                    
                    
                }GROUP BY ?Surah_No
                `;

                let query = encodeURIComponent(theme_query);
                let url = base_url + query + '&format=application%2Fsparql-results%2Bjson&timeout=0';

                console.log("URL => ", url);

                fetch(url)
                    .then(async response => {
                        console.log(response.status, " | ", response.statusText, " | ", typeof (response));
                        console.log(response);

                        try {
                            const data = await response.text();

                            console.log("Response => ", data);

                            var arr = data.split('\n');
                            var arr2 = [];

                            for (let i = 0; i < arr.length; i++) {
                                arr2[i] = arr[i].split(',');
                            }

                            console.log("Arr2:\n", arr2);

                            var disp1 = [];
                            var disp2 = [];

                            for (let i = 1; i < arr.length - 1; i++) {
                                disp1[i] = arr2[i][0];
                                disp2[i] = arr2[i][1];
                            }

                            console.log("Disp1 => \n", disp1);
                            console.log("Disp2 => \n", disp2);

                            var temp = "";

                            console.log("Colums: ", arr2[0].length);

                            temp += "<table className='tableCenter'>";
                            temp += "<thead>";
                            temp += "<tr>";
                            temp += "<th>" + arr2[0][0] + "</th>";
                            temp += "<th>" + arr2[0][1] + "</th>";
                            temp += "</tr>";
                            temp += "</thead>";

                            temp += "<tbody>";
                            for (let i = 1; i < arr.length - 1; i++) {
                                temp += "<tr>";
                                temp += "<td>" + arr2[i][0] + "</td>";
                                temp += "<td> " + arr2[i][1] + " </td>";
                                temp += "</tr>";
                            }
                            temp += "</tbody>";
                            temp += "</table>";

                            document.getElementById('rslt_qry1').innerHTML += temp;

                            const root = ReactDOM.createRoot(document.getElementById('graph_qry1')); 
                            root.render(<BarChart datax={disp1} GraphLabel="Number of sections in Each Surha" datay={disp2}/>);
                        }
                        catch (error) {
                            console.log('1. Rola pae gaya!');
                            console.log("1. Error => ", error);

                            document.getElementById('rslt_qry1').innerHTML = "Error => " + error;
                        }
                    })
                    .catch(error => {
                        console.log('2. Rola pae gaya!');
                        console.log("2. Error => ", error);

                        document.getElementById('rslt_qry1').innerHTML = "Error => " + error;
                    })
            }
            else                        // for speciffic surah no.
            {
                theme_query = `PREFIX : <http://www.tafsirtabari.com/ontology#>
                PREFIX W3:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                
                select  ?section_count(count( distinct ?section) as ?section_count) 
                
                where {
                    
                    ?section rdf:type :Section.
                    
                    ?section :isAbout ?Verse_Fragement.
                    
                    ?Verse_Fragement rdf:type :VerseFragment.
                    
                    ?Verse_Fragement :isPartOfVerse ?Verse.
                    
                    ?Surah :containsVerse ?Verse.
                
                
                    ?Surah rdf:type :Surah.
                    
                    ?Surah :hasSurahNo "`+ variable + `".
                    
                    
                }
                `;

                let query = encodeURIComponent(theme_query);
                let url = base_url + query + '&format=application%2Fsparql-results%2Bjson&timeout=0'

                console.log("URL => ", url)

                fetch(url)
                    .then(async response => {
                        console.log(response.status, " | ", response.statusText, " | ", typeof (response));
                        console.log(response);

                        try {
                            const data = await response.text();

                            console.log("Response => ", data);

                            var arr = data.split('\n');
                            console.log("Arr:\n", arr);

                            var temp = "Section count for Surah ";
                            temp += variable;
                            temp += " => ";
                            temp += arr[1];

                            document.getElementById('rslt_qry1').innerHTML += temp;

                        }
                        catch (error) {
                            console.log('1. Rola pae gaya!');
                            console.log("1. Error => ", error);

                            document.getElementById('rslt_qry1').innerHTML = "Error => " + error;
                        }
                    })
                    .catch(error => {
                        console.log('2. Rola pae gaya!');
                        console.log("2. Error => ", error);

                        document.getElementById('rslt_qry1').innerHTML = "Error => " + error;
                    })
            }
        }
    }

    Query2 = (event) => {
        event.preventDefault();
        // console.log("Query2 event.target[0].value: ", event.target[0].value);

        var variable = event.target[0].value;

        document.getElementById('rslt_qry2').innerHTML = "";
		document.getElementById('graph_qry2').innerHTML = '';

        {
            console.log("Query2 Processing");
            let theme_query;

            if (variable === '0')          // for all
            {
                theme_query = `PREFIX : <http://www.tafsirtabari.com/ontology#>
                PREFIX W3:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                
                select ?chapter_No  ?section_count(count(  ?Section) as ?section_count)  
                
                where {
                 
                    ?chapter rdf:type :Chapter.
                    
                    ?chapter :hasChapterNo ?chapter_No.
                    
                   ?chapter :containsSection ?Section.
                    
                }group by ?chapter_No
                `;

                let query = encodeURIComponent(theme_query);
                let url = base_url + query + '&format=application%2Fsparql-results%2Bjson&timeout=0';

                console.log("URL => ", url);

                fetch(url)
                    .then(async response => {
                        console.log(response.status, " | ", response.statusText, " | ", typeof (response));
                        console.log(response);

                        try {
                            const data = await response.text();

                            console.log("Response => ", data);

                            var arr = data.split('\n');
                            var arr2 = [];

                            for (let i = 0; i < arr.length; i++) {
                                arr2[i] = arr[i].split(',');
                            }

                            console.log("Arr2:\n", arr2);

                            var disp1 = [];
                            var disp2 = [];

                            for (let i = 1; i < arr.length - 1; i++) {
                                disp1[i] = arr2[i][0];
                                disp2[i] = arr2[i][1];
                            }

                            console.log("Disp1 => \n", disp1);
                            console.log("Disp2 => \n", disp2);

                            var temp = "";

                            temp += "<table className='tableCenter'>";
                            temp += "<thead>";
                            temp += "<tr>";
                            temp += "<th>" + arr2[0][0] + "</th>";
                            temp += "<th>" + arr2[0][1] + "</th>";
                            temp += "</tr>";
                            temp += "</thead>";

                            temp += "<tbody>";
                            for (let i = 1; i < arr.length - 1; i++) {
                                temp += "<tr>";
                                temp += "<td>" + arr2[i][0] + "</td>";
                                temp += "<td> " + arr2[i][1] + " </td>";
                                temp += "</tr>";
                            }
                            temp += "</tbody>";
                            temp += "</table>";

                            document.getElementById('rslt_qry2').innerHTML += temp;

                            const root = ReactDOM.createRoot(document.getElementById('graph_qry2')); 
                            root.render(<BarChart datax={disp1} GraphLabel="Number of sections in Each Chapter" datay={disp2}/>);
                        }
                        catch (error) {
                            console.log("1. Error => ", error);

                            document.getElementById('rslt_qry2').innerHTML = "Error => " + error;
                        }
                    })
                    .catch(error => {
                        console.log("2. Error => ", error);

                        document.getElementById('rslt_qry2').innerHTML = "Error => " + error;
                    })
            }
            else                        // for speciffic chapter no.
            {
                theme_query = `PREFIX : <http://www.tafsirtabari.com/ontology#>
                PREFIX W3:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                
                select   ?section_count(count(  ?Section) as ?section_count)  
                
                where {
                 
                    ?chapter rdf:type :Chapter.
                    
                    ?chapter :hasChapterNo "` + variable + `".
                    
                   ?chapter :containsSection ?Section.
                    
                }
                `;

                let query = encodeURIComponent(theme_query);
                let url = base_url + query + '&format=application%2Fsparql-results%2Bjson&timeout=0'

                console.log("URL => ", url)

                fetch(url)
                    .then(async response => {
                        console.log(response.status, " | ", response.statusText, " | ", typeof (response));
                        console.log(response);

                        try {
                            const data = await response.text();

                            console.log("Response => ", data);

                            var arr = data.split('\n');
                            console.log("Arr:\n", arr);

                            var temp = "Section count for Chapter ";
                            temp += variable;
                            temp += " => ";
                            temp += arr[1];

                            document.getElementById('rslt_qry2').innerHTML += temp;

                        }
                        catch (error) {
                            console.log("1. Error => ", error);

                            document.getElementById('rslt_qry2').innerHTML = "Error => " + error;
                        }
                    })
                    .catch(error => {
                        console.log("2. Error => ", error);

                        document.getElementById('rslt_qry2').innerHTML = "Error => " + error;
                    })
            }
        }
    }

    Query3 = (event) => {
        event.preventDefault();
        // console.log("Query3 event.target[0].value: ", event.target[0].value);

        var variable = event.target[0].value;

        document.getElementById('rslt_qry3').innerHTML = "";
		document.getElementById('graph_qry3').innerHTML = '';

        {
            console.log("Query3 Processing");
            let theme_query;

            if (variable === '0')          // for all
            {
                theme_query = `PREFIX : <http://www.tafsirtabari.com/ontology#>
                PREFIX W3:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                
                select ?chapter_No ?verse_count(count(  ?verse) as ?verse_count) 
                
                where {
                 
                    ?chapter rdf:type :Chapter.
                    
                    ?chapter :hasChapterNo ?chapter_No.
                    
                    ?chapter :containsVerse ?verse.
                
                }group by ?chapter_No
                `;

                let query = encodeURIComponent(theme_query);
                let url = base_url + query + '&format=application%2Fsparql-results%2Bjson&timeout=0';

                console.log("URL => ", url);

                fetch(url)
                    .then(async response => {
                        console.log(response.status, " | ", response.statusText, " | ", typeof (response));
                        console.log(response);

                        try {
                            const data = await response.text();

                            console.log("Response => ", data);

                            var arr = data.split('\n');
                            var arr2 = [];

                            for (let i = 0; i < arr.length; i++) {
                                arr2[i] = arr[i].split(',');
                            }

                            console.log("Arr2:\n", arr2);

                            var disp1 = [];
                            var disp2 = [];

                            for (let i = 1; i < arr.length - 1; i++) {
                                disp1[i] = arr2[i][0];
                                disp2[i] = arr2[i][1];
                            }

                            console.log("Disp1 => \n", disp1);
                            console.log("Disp2 => \n", disp2);

                            var temp = "";

                            temp += "<table className='tableCenter'>";
                            temp += "<thead>";
                            temp += "<tr>";
                            temp += "<th>" + arr2[0][0] + "</th>";
                            temp += "<th>" + arr2[0][1] + "</th>";
                            temp += "</tr>";
                            temp += "</thead>";

                            temp += "<tbody>";
                            for (let i = 1; i < arr.length - 1; i++) {
                                temp += "<tr>";
                                temp += "<td>" + arr2[i][0] + "</td>";
                                temp += "<td> " + arr2[i][1] + " </td>";
                                temp += "</tr>";
                            }
                            temp += "</tbody>";
                            temp += "</table>";

                            document.getElementById('rslt_qry3').innerHTML += temp;

                            const root = ReactDOM.createRoot(document.getElementById('graph_qry3')); 
                            root.render(<BarChart datax={disp1} GraphLabel="Number of Verses in Each Chapter" datay={disp2}/>);
                        }
                        catch (error) {
                            console.log("1. Error => ", error);

                            document.getElementById('rslt_qry3').innerHTML = "Error => " + error;
                        }
                    })
                    .catch(error => {
                        console.log("2. Error => ", error);

                        document.getElementById('rslt_qry3').innerHTML = "Error => " + error;
                    })
            }
            else                        // for speciffic chapter no.
            {
                theme_query = `PREFIX : <http://www.tafsirtabari.com/ontology#>
                PREFIX W3:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                
                select ?verse_count(count(  ?verse) as ?verse_count) 
                
                where {
                 
                    ?chapter rdf:type :Chapter.
                    
                    ?chapter :hasChapterNo "` + variable + `".
                    
                    ?chapter :containsVerse ?verse.
                
                }
                `;

                let query = encodeURIComponent(theme_query);
                let url = base_url + query + '&format=application%2Fsparql-results%2Bjson&timeout=0';

                console.log("URL => ", url);

                fetch(url)
                    .then(async response => {
                        console.log(response.status, " | ", response.statusText, " | ", typeof (response));
                        console.log(response);

                        try {
                            const data = await response.text();

                            console.log("Response => ", data);

                            var arr = data.split('\n');
                            console.log("Arr:\n", arr);

                            var temp = "Verse count for Chapter ";
                            temp += variable;
                            temp += " => ";
                            temp += arr[1];

                            document.getElementById('rslt_qry3').innerHTML += temp;

                        }
                        catch (error) {
                            console.log("1. Error => ", error);

                            document.getElementById('rslt_qry3').innerHTML = "Error => " + error;
                        }
                    })
                    .catch(error => {
                        console.log("2. Error => ", error);

                        document.getElementById('rslt_qry3').innerHTML = "Error => " + error;
                    })
            }
        }
    }

    Query4 = (event) => {
        event.preventDefault();
        // console.log("Query4 event.target[0].value: ", event.target[0].value);

        var variable = event.target[0].value;

        document.getElementById('rslt_qry4').innerHTML = "";
        document.getElementById('graph_qry4').innerHTML = '';

        {
            console.log("Query4 Processing");
            let theme_query;

            if (variable === '0')          // for all
            {
                theme_query = `PREFIX : <http://www.tafsirtabari.com/ontology#>
                PREFIX W3:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                
                select ?hadith_No ?segment_count(count(  ?segment) as ?segment_count) 
                
                where {
                 
                    
                    ?Hadith rdf:type :Hadith.
                    
                    ?Hadith :containsSegment ?segment.
                    
                    ?Hadith :hasHadithNo ?hadith_No.
                    
                }group by ?hadith_No
                `;

                let query = encodeURIComponent(theme_query);
                let url = base_url + query + '&format=application%2Fsparql-results%2Bjson&timeout=0';

                console.log("URL => ", url);

                fetch(url)
                    .then(async response => {
                        console.log(response.status, " | ", response.statusText, " | ", typeof (response));
                        console.log(response);

                        try {
                            const data = await response.text();

                            console.log("Response => ", data);

                            var arr = data.split('\n');
                            var arr2 = [];

                            for (let i = 0; i < arr.length; i++) {
                                arr2[i] = arr[i].split(',');
                            }

                            console.log("Arr2:\n", arr2);

                            var disp1 = [];
                            var disp2 = [];

                            for (let i = 1; i < arr.length - 1; i++) {
                                disp1[i] = arr2[i][0];
                                disp2[i] = arr2[i][1];
                            }

                            console.log("Disp1 => \n", disp1);
                            console.log("Disp2 => \n", disp2);

                            var temp = "";

                            temp += "<table className='tableCenter'>";
                            temp += "<thead>";
                            temp += "<tr>";
                            temp += "<th>" + arr2[0][0] + "</th>";
                            temp += "<th>" + arr2[0][1] + "</th>";
                            temp += "</tr>";
                            temp += "</thead>";

                            temp += "<tbody>";
                            for (let i = 1; i < arr.length - 1; i++) {
                                temp += "<tr>";
                                temp += "<td>" + arr2[i][0] + "</td>";
                                temp += "<td> " + arr2[i][1] + " </td>";
                                temp += "</tr>";
                            }
                            temp += "</tbody>";
                            temp += "</table>";

                            document.getElementById('rslt_qry4').innerHTML += temp;

                            const root = ReactDOM.createRoot(document.getElementById('graph_qry4')); 
                            root.render(<BarChart datax={disp1} GraphLabel="Number of Segments in Each Hadith" datay={disp2}/>);
                        }
                        catch (error) {
                            console.log("1. Error => ", error);

                            document.getElementById('rslt_qry4').innerHTML = "Error => " + error;
                        }
                    })
                    .catch(error => {
                        console.log("2. Error => ", error);

                        document.getElementById('rslt_qry4').innerHTML = "Error => " + error;
                    })
            }
            else                        // for speciffic hadith no.
            {
                theme_query = `PREFIX : <http://www.tafsirtabari.com/ontology#>
                PREFIX W3:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                
                select  ?segment_count(count(  ?segment) as ?segment_count) 
                
                where {
                 
                    
                    ?Hadith rdf:type :Hadith.
                    
                    ?Hadith :containsSegment ?segment.
                    
                    ?Hadith :hasHadithNo "h` + variable + `".
                    
                }
                `;

                let query = encodeURIComponent(theme_query);
                let url = base_url + query + '&format=application%2Fsparql-results%2Bjson&timeout=0'

                console.log("URL => ", url)

                fetch(url)
                    .then(async response => {
                        console.log(response.status, " | ", response.statusText, " | ", typeof (response));
                        console.log(response);

                        try {
                            const data = await response.text();

                            console.log("Response => ", data);

                            var arr = data.split('\n');
                            console.log("Arr:\n", arr);

                            var temp = "Segment count for Hadith ";
                            temp += variable;
                            temp += " => ";
                            temp += arr[1];

                            document.getElementById('rslt_qry4').innerHTML += temp;

                        }
                        catch (error) {
                            console.log("1. Error => ", error);

                            document.getElementById('rslt_qry4').innerHTML = "Error => " + error;
                        }
                    })
                    .catch(error => {
                        console.log("2. Error => ", error);

                        document.getElementById('rslt_qry4').innerHTML = "Error => " + error;
                    })
            }
        }
    }

    Query5 = (event) => {
        event.preventDefault();
        // console.log("Query5 event.target[0].value: ", event.target[0].value);

        var variable = event.target[0].value;

        document.getElementById('rslt_qry5').innerHTML = "";
        document.getElementById('graph_qry5').innerHTML = '';

        {
            console.log("Query5 Processing");
            let theme_query;

            if (variable === '0')          // for all
            {
                theme_query = `PREFIX : <http://www.tafsirtabari.com/ontology#>
                PREFIX W3:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                
                select ?hadith_No ?Narrator_count(count(?o) as ?Narrator_count)  
                
                where {
                 
                    
                    ?Hadith rdf:type :Hadith.
                
                    ?Hadith :hasHadithNo ?hadith_No.
                    
                    ?Narrator_Chain :isPartOfHadith ?Hadith.
                    
                     ?Narrator_Chain :hasNarratorSegment ?o.
                
                    
                }group by ?hadith_No
                `;

                let query = encodeURIComponent(theme_query);
                let url = base_url + query + '&format=application%2Fsparql-results%2Bjson&timeout=0';

                console.log("URL => ", url);

                fetch(url)
                    .then(async response => {
                        console.log(response.status, " | ", response.statusText, " | ", typeof (response));
                        console.log(response);

                        try {
                            const data = await response.text();

                            console.log("Response => ", data);

                            var arr = data.split('\n');
                            var arr2 = [];

                            for (let i = 0; i < arr.length; i++) {
                                arr2[i] = arr[i].split(',');
                            }

                            console.log("Arr2:\n", arr2);

                            var disp1 = [];
                            var disp2 = [];

                            for (let i = 1; i < arr.length - 1; i++) {
                                disp1[i] = arr2[i][0];
                                disp2[i] = arr2[i][1];
                            }

                            console.log("Disp1 => \n", disp1);
                            console.log("Disp2 => \n", disp2);

                            var temp = "";

                            temp += "<table className='tableCenter'>";
                            temp += "<thead>";
                            temp += "<tr>";
                            temp += "<th>" + arr2[0][0] + "</th>";
                            temp += "<th>" + arr2[0][1] + "</th>";
                            temp += "</tr>";
                            temp += "</thead>";

                            temp += "<tbody>";
                            for (let i = 1; i < arr.length - 1; i++) {
                                temp += "<tr>";
                                temp += "<td>" + arr2[i][0] + "</td>";
                                temp += "<td> " + arr2[i][1] + " </td>";
                                temp += "</tr>";
                            }
                            temp += "</tbody>";
                            temp += "</table>";

                            document.getElementById('rslt_qry5').innerHTML += temp;

                            const root = ReactDOM.createRoot(document.getElementById('graph_qry5')); 
                            root.render(<BarChart datax={disp1} GraphLabel="Number of Narrators in Each Hadith" datay={disp2}/>);
                        }
                        catch (error) {
                            console.log("1. Error => ", error);

                            document.getElementById('rslt_qry5').innerHTML = "Error => " + error;
                        }
                    })
                    .catch(error => {
                        console.log("2. Error => ", error);

                        document.getElementById('rslt_qry5').innerHTML = "Error => " + error;
                    })
            }
            else                        // for speciffic hadith no.
            {
                theme_query = `PREFIX : <http://www.tafsirtabari.com/ontology#>
                PREFIX W3:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                
                select  ?Narrator_count(count(?o) as ?Narrator_count)  
                
                where {
                 
                    
                    ?Hadith rdf:type :Hadith.
                
                    ?Hadith :hasHadithNo "h` + variable + `".
                    
                    ?Narrator_Chain :isPartOfHadith ?Hadith.
                    
                     ?Narrator_Chain :hasNarratorSegment ?o.
                
                    
                }
                `;

                let query = encodeURIComponent(theme_query);
                let url = base_url + query + '&format=application%2Fsparql-results%2Bjson&timeout=0'

                console.log("URL => ", url)

                fetch(url)
                    .then(async response => {
                        console.log(response.status, " | ", response.statusText, " | ", typeof (response));
                        console.log(response);

                        try {
                            const data = await response.text();

                            console.log("Response => ", data);

                            var arr = data.split('\n');
                            console.log("Arr:\n", arr);

                            var temp = "Narrator count for Hadith ";
                            temp += variable;
                            temp += " => ";
                            temp += arr[1];

                            document.getElementById('rslt_qry5').innerHTML += temp;

                        }
                        catch (error) {
                            console.log("1. Error => ", error);

                            document.getElementById('rslt_qry5').innerHTML = "Error => " + error;
                        }
                    })
                    .catch(error => {
                        console.log("2. Error => ", error);

                        document.getElementById('rslt_qry5').innerHTML = "Error => " + error;
                    })
            }
        }
    }

    Query6 = (event) => {
        event.preventDefault();
        // console.log("Query6 event.target[0].value: ", event.target[0].value);

        var variable = event.target[0].value;

        document.getElementById('rslt_qry6').innerHTML = "";
        document.getElementById('graph_qry6').innerHTML = '';

        {
            console.log("Query6 Processing");
            let theme_query;

            if (variable === '0')          // for all
            {
                theme_query = `PREFIX : <http://www.tafsirtabari.com/ontology#>
                PREFIX W3:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                
                select ?hadith_No ?Organization_count(count(?Organization) as ?Organization_count)  
                
                where {
                 
                    
                    ?Organization rdf:type :Organization.
                    
                    ?Hadith rdf:type :Hadith.
                    
                    ?Hadith :hasHadithNo ?hadith_No.
                    
                    ?Hadith :mentions ?Organization.
                
                
                
                    
                }group by ?hadith_No
                `;

                let query = encodeURIComponent(theme_query);
                let url = base_url + query + '&format=application%2Fsparql-results%2Bjson&timeout=0';

                console.log("URL => ", url);

                fetch(url)
                    .then(async response => {
                        console.log(response.status, " | ", response.statusText, " | ", typeof (response));
                        console.log(response);

                        try {
                            const data = await response.text();

                            console.log("Response => ", data);

                            var arr = data.split('\n');
                            var arr2 = [];

                            for (let i = 0; i < arr.length; i++) {
                                arr2[i] = arr[i].split(',');
                            }

                            console.log("Arr2:\n", arr2);

                            var disp1 = [];
                            var disp2 = [];

                            for (let i = 1; i < arr.length - 1; i++) {
                                disp1[i] = arr2[i][0];
                                disp2[i] = arr2[i][1];
                            }

                            console.log("Disp1 => \n", disp1);
                            console.log("Disp2 => \n", disp2);

                            var temp = "";

                            temp += "<table className='tableCenter'>";
                            temp += "<thead>";
                            temp += "<tr>";
                            temp += "<th>" + arr2[0][0] + "</th>";
                            temp += "<th>" + arr2[0][1] + "</th>";
                            temp += "</tr>";
                            temp += "</thead>";

                            temp += "<tbody>";
                            for (let i = 1; i < arr.length - 1; i++) {
                                temp += "<tr>";
                                temp += "<td>" + arr2[i][0] + "</td>";
                                temp += "<td> " + arr2[i][1] + " </td>";
                                temp += "</tr>";
                            }
                            temp += "</tbody>";
                            temp += "</table>";

                            document.getElementById('rslt_qry6').innerHTML += temp;

                            const root = ReactDOM.createRoot(document.getElementById('graph_qry6')); 
                            root.render(<BarChart datax={disp1} GraphLabel="Number of Organizations" datay={disp2}/>);
                        }
                        catch (error) {
                            console.log("1. Error => ", error);

                            document.getElementById('rslt_qry6').innerHTML = "Error => " + error;
                        }
                    })
                    .catch(error => {
                        console.log("2. Error => ", error);

                        document.getElementById('rslt_qry6').innerHTML = "Error => " + error;
                    })
            }
            else                        // for speciffic Hadith no.
            {
                theme_query = `PREFIX : <http://www.tafsirtabari.com/ontology#>
                PREFIX W3:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                
                select  ?Organization_count(count(?Organization) as ?Organization_count)  
                
                where {
                 
                    
                    ?Organization rdf:type :Organization.
                    
                    ?Hadith rdf:type :Hadith.
                    
                    ?Hadith :hasHadithNo "h` + variable + `".
                    
                    ?Hadith :mentions ?Organization.
                
                
                
                    
                }
                `;

                let query = encodeURIComponent(theme_query);
                let url = base_url + query + '&format=application%2Fsparql-results%2Bjson&timeout=0'

                console.log("URL => ", url)

                fetch(url)
                    .then(async response => {
                        console.log(response.status, " | ", response.statusText, " | ", typeof (response));
                        console.log(response);

                        try {
                            const data = await response.text();

                            console.log("Response => ", data);

                            var arr = data.split('\n');
                            console.log("Arr:\n", arr);

                            var temp = "Organization count for Hadith ";
                            temp += variable;
                            temp += " => ";
                            temp += arr[1];

                            document.getElementById('rslt_qry6').innerHTML += temp;

                        }
                        catch (error) {
                            console.log("1. Error => ", error);

                            document.getElementById('rslt_qry6').innerHTML = "Error => " + error;
                        }
                    })
                    .catch(error => {
                        console.log("2. Error => ", error);

                        document.getElementById('rslt_qry6').innerHTML = "Error => " + error;
                    })
            }
        }
    }

    Query7 = (event) => {
        event.preventDefault();
        console.log("Query7 event.target[0].value: ", event.target[0].value);
        console.log("Query7 event.target[1].value: ", event.target[1].value);

        var variable = event.target[0].value;

        document.getElementById('rslt_qry7').innerHTML = "";

        {
            console.log("Query7 Processing");
            let theme_query;

            if (variable === '0')          // for all
            {
                theme_query = `PREFIX : <http://www.tafsirtabari.com/ontology#>
                PREFIX W3:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                
                select ?VerseChapter_No ?Verse_No  ?Verse_Fragment_count(count( ?Verse_Fragment ) as  ?Verse_Fragment_count)  
                
                where {
                 
                    ?Verse_Fragment rdf:type :VerseFragment.
                    
                    ?Verse_Fragment :isPartOfVerse ?Verse.
                    
                    ?Verse :hasChapterNo ?VerseChapter_No.
                    
                    ?Verse :hasVerseNo ?Verse_No.
                
                    
                }group by ?VerseChapter_No ?Verse_No
                `;

                let query = encodeURIComponent(theme_query);
                let url = base_url + query + '&format=application%2Fsparql-results%2Bjson&timeout=0';

                console.log("URL => ", url);

                fetch(url)
                    .then(async response => {
                        console.log(response.status, " | ", response.statusText, " | ", typeof (response));
                        console.log(response);

                        try {
                            const data = await response.text();

                            console.log("Response => ", data);

                            var arr = data.split('\n');
                            var arr2 = [];

                            for (let i = 0; i < arr.length; i++) {
                                arr2[i] = arr[i].split(',');
                            }

                            console.log("Arr2:\n", arr2);

                            var disp1 = [];
                            var disp2 = [];

                            for (let i = 1; i < arr.length - 1; i++) {
                                disp1[i] = arr2[i][0];
                                disp2[i] = arr2[i][1];
                            }

                            console.log("Disp1 => \n", disp1);
                            console.log("Disp2 => \n", disp2);

                            var temp = "";

                            temp += "<table className='tableCenter'>";
                            temp += "<thead>";
                            temp += "<tr>";
                            temp += "<th>" + arr2[0][0] + "</th>";
                            temp += "<th>" + arr2[0][1] + "</th>";
                            temp += "<th>" + arr2[0][2] + "</th>";
                            temp += "</tr>";
                            temp += "</thead>";

                            temp += "<tbody>";
                            for (let i = 1; i < arr.length - 1; i++) {
                                temp += "<tr>";
                                temp += "<td>" + arr2[i][0] + "</td>";
                                temp += "<td> " + arr2[i][1] + " </td>";
                                temp += "<td> " + arr2[i][2] + " </td>";
                                temp += "</tr>";
                            }
                            temp += "</tbody>";
                            temp += "</table>";

                            document.getElementById('rslt_qry7').innerHTML += temp;
                        }
                        catch (error) {
                            console.log("1. Error => ", error);

                            document.getElementById('rslt_qry7').innerHTML = "Error => " + error;
                        }
                    })
                    .catch(error => {
                        console.log("2. Error => ", error);

                        document.getElementById('rslt_qry7').innerHTML = "Error => " + error;
                    })
            }
            else                        // for speciffic verse no. of a specific chapter
            {
                var variable2 = event.target[1].value;

                theme_query = `PREFIX : <http://www.tafsirtabari.com/ontology#>
                PREFIX W3:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                
                select   ?Verse_Fragment_count(count( ?Verse_Fragment ) as  ?Verse_Fragment_count)  
                
                where {
                 
                    ?Verse_Fragment rdf:type :VerseFragment.
                    
                    ?Verse_Fragment :isPartOfVerse ?Verse.
                    
                    ?Verse :hasChapterNo "` + variable + `".
                    
                    ?Verse :hasVerseNo "` + variable2 + `".
                
                    
                }
                `;

                let query = encodeURIComponent(theme_query);
                let url = base_url + query + '&format=application%2Fsparql-results%2Bjson&timeout=0'

                console.log("URL => ", url)

                fetch(url)
                    .then(async response => {
                        console.log(response.status, " | ", response.statusText, " | ", typeof (response));
                        console.log(response);

                        try {
                            const data = await response.text();

                            console.log("Response => ", data);

                            var arr = data.split('\n');
                            console.log("Arr:\n", arr);

                            var temp = "Verse fragment count for verse ";
                            temp += variable2;
                            temp += " of chapter ";
                            temp += variable;
                            temp += " => ";
                            temp += arr[1];

                            document.getElementById('rslt_qry7').innerHTML += temp;

                        }
                        catch (error) {
                            console.log("1. Error => ", error);

                            document.getElementById('rslt_qry7').innerHTML = "Error => " + error;
                        }
                    })
                    .catch(error => {
                        console.log("2. Error => ", error);

                        document.getElementById('rslt_qry7').innerHTML = "Error => " + error;
                    })
            }
        }
    }

    Query8 = (event) => {
        event.preventDefault();
        // console.log("Query8 event.target[0].value: ", event.target[0].value);

        var variable = event.target[0].value;

        document.getElementById('rslt_qry8').innerHTML = "";
        document.getElementById('graph_qry8').innerHTML = '';

        {
            console.log("Query8 Processing");

            let theme_query;

            if (variable === '0')          // for all
            {
                theme_query = `PREFIX : <http://www.tafsirtabari.com/ontology#>
                PREFIX W3:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                
                select ?Poetry ?Organization_count(count(?Organization) as ?Organization_count)  
                
                where {
                 
                    
                    ?Organization rdf:type :Organization.
                    
                    ?Poetry rdf:type :Poetry.
                    
                    ?Poetry :mentions ?Organization.
                
                
                    
                }group by ?Poetry
                `;

                let query = encodeURIComponent(theme_query);
                let url = base_url + query + '&format=application%2Fsparql-results%2Bjson&timeout=0';

                console.log("URL => ", url);

                fetch(url)
                    .then(async response => {
                        console.log(response.status, " | ", response.statusText, " | ", typeof (response));
                        console.log(response);

                        try {
                            const data = await response.text();

                            console.log("Response => ", data);

                            var arr = data.split('\n');
                            var arr2 = [];

                            for (let i = 0; i < arr.length; i++) {
                                arr2[i] = arr[i].split(',');
                            }

                            console.log("Arr2:\n", arr2);

                            var disp1 = [];
                            var disp2 = [];

                            for (let i = 1; i < arr.length - 1; i++) {
                                disp1[i] = arr2[i][0];
                                disp2[i] = arr2[i][1];
                            }

                            console.log("Disp1 => \n", disp1);
                            console.log("Disp2 => \n", disp2);

                            var temp = "";

                            temp += "<table className='tableCenter'>";
                            temp += "<thead>";
                            temp += "<tr>";
                            temp += "<th>" + arr2[0][0] + "</th>";
                            temp += "<th>" + arr2[0][1] + "</th>";
                            temp += "</tr>";
                            temp += "</thead>";

                            temp += "<tbody>";
                            for (let i = 1; i < arr.length - 1; i++) {
                                temp += "<tr>";
                                temp += "<td>" + arr2[i][0] + "</td>";
                                temp += "<td> " + arr2[i][1] + " </td>";
                                temp += "</tr>";
                            }
                            temp += "</tbody>";
                            temp += "</table>";

                            document.getElementById('rslt_qry8').innerHTML += temp;

                            const root = ReactDOM.createRoot(document.getElementById('graph_qry8')); 
                            root.render(<BarChart datax={disp1} GraphLabel="Number of Organizations" datay={disp2}/>);
                        }
                        catch (error) {
                            console.log("1. Error => ", error);

                            document.getElementById('rslt_qry8').innerHTML = "Error => " + error;
                        }
                    })
                    .catch(error => {
                        console.log("2. Error => ", error);

                        document.getElementById('rslt_qry8').innerHTML = "Error => " + error;
                    })
            }
            else                        // for speciffic surah no.
            {
                theme_query = `PREFIX : <http://www.tafsirtabari.com/ontology#>
                PREFIX W3:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                
                select  ?Organization_count(count(?Organization) as ?Organization_count)  
                
                where {
                 
                    
                    ?Organization rdf:type :Organization.
                    
                    "http://www.tafsirtabari.com/ontology#P` + variable + `" rdf:type :Poetry.
                    
                    "http://www.tafsirtabari.com/ontology#P` + variable + `" :mentions ?Organization.
                
                        #This Variable must be link not value,check its query in Analysis document.
                
                    
                    }
                `;
                // http://www.tafsirtabari.com/ontology#P

                console.log("Theme query = > \n", theme_query);

                let query = encodeURIComponent(theme_query);
                let url = base_url + query + '&format=application%2Fsparql-results%2Bjson&timeout=0'

                console.log("URL => ", url)

                fetch(url)
                    .then(async response => {
                        console.log(response.status, " | ", response.statusText, " | ", typeof (response));
                        console.log(response);

                        try {
                            const data = await response.text();

                            console.log("Response => ", data);

                            var arr = data.split('\n');
                            console.log("Arr:\n", arr);

                            var temp = "Organization count in Poetry http://www.tafsirtabari.com/ontology#P";
                            temp += variable;
                            temp += " => ";
                            temp += arr[1];

                            document.getElementById('rslt_qry8').innerHTML += temp;

                        }
                        catch (error) {
                            console.log("1. Error => ", error);

                            document.getElementById('rslt_qry8').innerHTML = "Error => " + error;
                        }
                    })
                    .catch(error => {
                        console.log("2. Error => ", error);

                        document.getElementById('rslt_qry8').innerHTML = "Error => " + error;
                    })
            }
        }
    }

    Query9 = (event) => {
        event.preventDefault();
        // console.log("Query9 event.target[0].value: ", event.target[0].value);
        // console.log("Query9 event.target[1].value: ", event.target[1].value);

        var variable = event.target[0].value;

        document.getElementById('rslt_qry9').innerHTML = "";

        {
            console.log("Query9 Processing");
            let theme_query;

            if (variable === '0')          // for all
            {
                theme_query = `PREFIX : <http://www.tafsirtabari.com/ontology#>
                PREFIX W3:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                
                select ?VerseChapter_No ?Verse_No  ?Segment_count(count( ?Segment ) as  ?Segment_count)  
                 
                where {
                 
                    
                 ?Segment :references ?Verse.
                 
                 ?Segment rdf:type :Segment.
                 
                 ?Verse rdf:type :Verse.
                 
                 ?Verse :hasChapterNo ?VerseChapter_No.
                    
                 ?Verse :hasVerseNo ?Verse_No.   
                    
                    
                }group by ?VerseChapter_No ?Verse_No
                `;

                let query = encodeURIComponent(theme_query);
                let url = base_url + query + '&format=application%2Fsparql-results%2Bjson&timeout=0';

                console.log("URL => ", url);

                fetch(url)
                    .then(async response => {
                        console.log(response.status, " | ", response.statusText, " | ", typeof (response));
                        console.log(response);

                        try {
                            const data = await response.text();

                            console.log("Response => ", data);

                            var arr = data.split('\n');
                            var arr2 = [];

                            for (let i = 0; i < arr.length; i++) {
                                arr2[i] = arr[i].split(',');
                            }

                            console.log("Arr2:\n", arr2);

                            var disp1 = [];
                            var disp2 = [];

                            for (let i = 1; i < arr.length - 1; i++) {
                                disp1[i] = arr2[i][0];
                                disp2[i] = arr2[i][1];
                            }

                            console.log("Disp1 => \n", disp1);
                            console.log("Disp2 => \n", disp2);

                            var temp = "";

                            temp += "<table className='tableCenter'>";
                            temp += "<thead>";
                            temp += "<tr>";
                            temp += "<th>" + arr2[0][0] + "</th>";
                            temp += "<th>" + arr2[0][1] + "</th>";
                            temp += "<th>" + arr2[0][2] + "</th>";
                            temp += "</tr>";
                            temp += "</thead>";

                            temp += "<tbody>";
                            for (let i = 1; i < arr.length - 1; i++) {
                                temp += "<tr>";
                                temp += "<td>" + arr2[i][0] + "</td>";
                                temp += "<td> " + arr2[i][1] + " </td>";
                                temp += "<td> " + arr2[i][2] + " </td>";
                                temp += "</tr>";
                            }
                            temp += "</tbody>";
                            temp += "</table>";

                            document.getElementById('rslt_qry9').innerHTML += temp;
                        }
                        catch (error) {
                            console.log("1. Error => ", error);

                            document.getElementById('rslt_qry9').innerHTML = "Error => " + error;
                        }
                    })
                    .catch(error => {
                        console.log("2. Error => ", error);

                        document.getElementById('rslt_qry9').innerHTML = "Error => " + error;
                    })
            }
            else                        // for speciffic surah no.
            {
                var variable2 = event.target[1].value;

                theme_query = `PREFIX : <http://www.tafsirtabari.com/ontology#>
                PREFIX W3:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                
                select  ?Segment_count(count( ?Segment ) as  ?Segment_count)  
                 
                where {
                 
                    
                 ?Segment :references ?Verse.
                 
                 ?Segment rdf:type :Segment.
                 
                 ?Verse rdf:type :Verse.
                 
                 ?Verse :hasChapterNo "` + variable + `".
                    
                 ?Verse :hasVerseNo "` + variable2 + `".   
                    
                    
                }
                `;

                let query = encodeURIComponent(theme_query);
                let url = base_url + query + '&format=application%2Fsparql-results%2Bjson&timeout=0'

                console.log("URL => ", url)

                fetch(url)
                    .then(async response => {
                        console.log(response.status, " | ", response.statusText, " | ", typeof (response));
                        console.log(response);

                        try {
                            const data = await response.text();

                            console.log("Response => ", data);

                            var arr = data.split('\n');
                            console.log("Arr:\n", arr);

                            var temp = "Segment count in verse ";
                            temp += variable2;
                            temp += " of chapter ";
                            temp += variable;
                            temp += " => ";
                            temp += arr[1];

                            document.getElementById('rslt_qry9').innerHTML += temp;

                        }
                        catch (error) {
                            console.log("1. Error => ", error);

                            document.getElementById('rslt_qry9').innerHTML = "Error => " + error;
                        }
                    })
                    .catch(error => {
                        console.log("2. Error => ", error);

                        document.getElementById('rslt_qry9').innerHTML = "Error => " + error;
                    })
            }
        }
    }

    Query10 = (event) => {
        event.preventDefault();
        // console.log("Query10 event.target[0].value: ", event.target[0].value);
        // console.log("Query10 event.target[1].value: ", event.target[1].value);

        var variable = event.target[0].value;

        document.getElementById('rslt_qry10').innerHTML = "";

        {
            console.log("Query10 Processing");

            let theme_query;

            if (variable === '0')          // for all
            {
                theme_query = `PREFIX : <http://www.tafsirtabari.com/ontology#>
                PREFIX W3:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                
                select ?VerseChapter_No ?Verse_No  ?Segment_count(count( ?Segment ) as  ?Segment_count)  
                
                where {
                 
                    ?Verse_Fragment rdf:type :VerseFragment.
                    
                    ?Verse_Fragment :isPartOfVerse ?Verse.
                    
                    ?Verse :hasChapterNo ?VerseChapter_No.
                    
                    ?Verse :hasVerseNo ?Verse_No.
                    
                    ?Segment :references ?Verse.
                    
                }group by ?VerseChapter_No ?Verse_No
                `;

                let query = encodeURIComponent(theme_query);
                let url = base_url + query + '&format=application%2Fsparql-results%2Bjson&timeout=0';

                console.log("URL => ", url);

                fetch(url)
                    .then(async response => {
                        console.log(response.status, " | ", response.statusText, " | ", typeof (response));
                        console.log(response);

                        try {
                            const data = await response.text();

                            console.log("Response => ", data);

                            var arr = data.split('\n');
                            var arr2 = [];

                            for (let i = 0; i < arr.length; i++) {
                                arr2[i] = arr[i].split(',');
                            }

                            console.log("Arr2:\n", arr2);

                            var disp1 = [];
                            var disp2 = [];

                            for (let i = 1; i < arr.length - 1; i++) {
                                disp1[i] = arr2[i][0];
                                disp2[i] = arr2[i][1];
                            }

                            console.log("Disp1 => \n", disp1);
                            console.log("Disp2 => \n", disp2);

                            var temp = "";

                            temp += "<table className='tableCenter'>";
                            temp += "<thead>";
                            temp += "<tr>";
                            temp += "<th>" + arr2[0][0] + "</th>";
                            temp += "<th>" + arr2[0][1] + "</th>";
                            temp += "<th>" + arr2[0][2] + "</th>";
                            temp += "</tr>";
                            temp += "</thead>";

                            temp += "<tbody>";
                            for (let i = 1; i < arr.length - 1; i++) {
                                temp += "<tr>";
                                temp += "<td>" + arr2[i][0] + "</td>";
                                temp += "<td> " + arr2[i][1] + " </td>";
                                temp += "<td> " + arr2[i][2] + " </td>";
                                temp += "</tr>";
                            }
                            temp += "</tbody>";
                            temp += "</table>";

                            document.getElementById('rslt_qry10').innerHTML += temp;
                        }
                        catch (error) {
                            console.log("1. Error => ", error);

                            document.getElementById('rslt_qry10').innerHTML = "Error => " + error;
                        }
                    })
                    .catch(error => {
                        console.log("2. Error => ", error);

                        document.getElementById('rslt_qry10').innerHTML = "Error => " + error;
                    })
            }
            else                        // for speciffic surah no.
            {
                var variable2 = event.target[1].value;

                theme_query = `PREFIX : <http://www.tafsirtabari.com/ontology#>
                PREFIX W3:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                
                select  ?Segment_count(count( ?Segment ) as  ?Segment_count)  
                
                where {
                 
                    ?Verse_Fragment rdf:type :VerseFragment.
                    
                    ?Verse_Fragment :isPartOfVerse ?Verse.
                    
                    ?Verse :hasChapterNo "` + variable + `".
                    
                    ?Verse :hasVerseNo "` + variable2 + `".
                    
                    ?Segment :references ?Verse.
                    
                }
                `;

                let query = encodeURIComponent(theme_query);
                let url = base_url + query + '&format=application%2Fsparql-results%2Bjson&timeout=0'

                console.log("URL => ", url)

                fetch(url)
                    .then(async response => {
                        console.log(response.status, " | ", response.statusText, " | ", typeof (response));
                        console.log(response);

                        try {
                            const data = await response.text();

                            console.log("Response => ", data);

                            var arr = data.split('\n');
                            console.log("Arr:\n", arr);

                            var temp = "Segment count for verse fragments of verse ";
                            temp += variable2;
                            temp += " of Chapter ";
                            temp += variable;
                            temp += " => ";
                            temp += arr[1];

                            document.getElementById('rslt_qry10').innerHTML += temp;

                        }
                        catch (error) {
                            console.log("1. Error => ", error);

                            document.getElementById('rslt_qry10').innerHTML = "Error => " + error;
                        }
                    })
                    .catch(error => {
                        console.log("2. Error => ", error);

                        document.getElementById('rslt_qry10').innerHTML = "Error => " + error;
                    })
            }
        }
    }

    Query11 = (event) => {
        event.preventDefault();
        // console.log("Query11 event.target[0].value: ", event.target[0].value);

        var variable = event.target[0].value;

        document.getElementById('rslt_qry11').innerHTML = "";
        document.getElementById('graph_qry11').innerHTML = '';

        {
            console.log("Query11 Processing");

            let theme_query;

            if (variable === '0')          // for all
            {
                theme_query = `PREFIX : <http://www.tafsirtabari.com/ontology#>
                PREFIX W3:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                
                select ?Theme_Name  ?Hadis_count(count( ?Hadis ) as  ?Hadis_count)  
                
                where {
                 
                    ?Theme rdf:type :Theme.
                    
                    ?Theme :hasName ?Theme_Name.
                    
                    ?Hadis :hasTheme ?Theme.
                    
                    ?Hadis rdf:type :Hadith.
                    
                    
                }group by ?Theme_Name
                `;

                let query = encodeURIComponent(theme_query);
                let url = base_url + query + '&format=application%2Fsparql-results%2Bjson&timeout=0';

                console.log("URL => ", url);

                fetch(url)
                    .then(async response => {
                        console.log(response.status, " | ", response.statusText, " | ", typeof (response));
                        console.log(response);

                        try {
                            const data = await response.text();

                            console.log("Response => ", data);

                            var arr = data.split('\n');
                            var arr2 = [];

                            for (let i = 0; i < arr.length; i++) {
                                arr2[i] = arr[i].split(',');
                            }

                            console.log("Arr2:\n", arr2);

                            var disp1 = [];
                            var disp2 = [];

                            for (let i = 1; i < arr.length - 1; i++) {
                                disp1[i] = arr2[i][0];
                                disp2[i] = arr2[i][1];
                            }

                            console.log("Disp1 => \n", disp1);
                            console.log("Disp2 => \n", disp2);

                            var temp = "";

                            temp += "<table className='tableCenter'>";
                            temp += "<thead>";
                            temp += "<tr>";
                            temp += "<th>" + arr2[0][0] + "</th>";
                            temp += "<th>" + arr2[0][1] + "</th>";
                            temp += "</tr>";
                            temp += "</thead>";

                            temp += "<tbody>";
                            for (let i = 1; i < arr.length - 1; i++) {
                                temp += "<tr>";
                                temp += "<td>" + arr2[i][0] + "</td>";
                                temp += "<td> " + arr2[i][1] + " </td>";
                                temp += "</tr>";
                            }
                            temp += "</tbody>";
                            temp += "</table>";

                            document.getElementById('rslt_qry11').innerHTML += temp;

                            const root = ReactDOM.createRoot(document.getElementById('graph_qry11')); 
                            root.render(<BarChart datax={disp1} GraphLabel="Number of Hadiths" datay={disp2}/>);
                        }
                        catch (error) {
                            console.log("1. Error => ", error);

                            document.getElementById('rslt_qry11').innerHTML = "Error => " + error;
                        }
                    })
                    .catch(error => {
                        console.log("2. Error => ", error);

                        document.getElementById('rslt_qry11').innerHTML = "Error => " + error;
                    })
            }
            else                        // for speciffic surah no.
            {
                theme_query = `PREFIX : <http://www.tafsirtabari.com/ontology#>
                PREFIX W3:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                
                select  ?Hadis_count(count( ?Hadis ) as  ?Hadis_count)  
                
                where {
                 
                    ?Theme rdf:type :Theme.
                    
                    ?Theme :hasName "` + variable + `".
                    
                    ?Hadis :hasTheme ?Theme.
                    
                    ?Hadis rdf:type :Hadith.
                    
                    
                }
                `;

                let query = encodeURIComponent(theme_query);
                let url = base_url + query + '&format=application%2Fsparql-results%2Bjson&timeout=0';

                console.log("URL => ", url);

                fetch(url)
                    .then(async response => {
                        console.log(response.status, " | ", response.statusText, " | ", typeof (response));
                        console.log(response);

                        try {
                            const data = await response.text();

                            console.log("Response => ", data);

                            var arr = data.split('\n');
                            console.log("Arr:\n", arr);

                            var temp = "Hadith count for theme ";
                            temp += variable;
                            temp += " => ";
                            temp += arr[1];

                            document.getElementById('rslt_qry11').innerHTML += temp;

                        }
                        catch (error) {
                            console.log("1. Error => ", error);

                            document.getElementById('rslt_qry11').innerHTML = "Error => " + error;
                        }
                    })
                    .catch(error => {
                        console.log("2. Error => ", error);

                        document.getElementById('rslt_qry11').innerHTML = "Error => " + error;
                    })
            }
        }
    }

    Query12 = (event) => {
        event.preventDefault();
        // console.log("Query12 event.target[0].value: ", event.target[0].value);

        var variable = event.target[0].value;

        document.getElementById('rslt_qry12').innerHTML = "";
        document.getElementById('graph_qry12').innerHTML = '';

        {
            console.log("Query12 Processing");

            let theme_query;

            if (variable === '0')          // for all
            {
                theme_query = `PREFIX : <http://www.tafsirtabari.com/ontology#>
                PREFIX W3:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                
                select ?Theme_Name  ?Commentary_count(count( ?Commentary) as  ?Commentary_count)  
                
                where {
                 
                    ?Theme rdf:type :Theme.
                    
                    ?Theme :hasName ?Theme_Name.
                    
                    ?Commentary :hasTheme ?Theme.
                    
                    ?Commentary rdf:type :Commentary.
                    
                    
                }group by ?Theme_Name
                `;

                let query = encodeURIComponent(theme_query);
                let url = base_url + query + '&format=application%2Fsparql-results%2Bjson&timeout=0';

                console.log("URL => ", url);

                fetch(url)
                    .then(async response => {
                        console.log(response.status, " | ", response.statusText, " | ", typeof (response));
                        console.log(response);

                        try {
                            const data = await response.text();

                            console.log("Response => ", data);

                            var arr = data.split('\n');
                            var arr2 = [];

                            for (let i = 0; i < arr.length; i++) {
                                arr2[i] = arr[i].split(',');
                            }

                            console.log("Arr2:\n", arr2);

                            var disp1 = [];
                            var disp2 = [];

                            for (let i = 1; i < arr.length - 1; i++) {
                                disp1[i] = arr2[i][0];
                                disp2[i] = arr2[i][1];
                            }

                            console.log("Disp1 => \n", disp1);
                            console.log("Disp2 => \n", disp2);

                            var temp = "";

                            temp += "<table className='tableCenter'>";
                            temp += "<thead>";
                            temp += "<tr>";
                            temp += "<th>" + arr2[0][0] + "</th>";
                            temp += "<th>" + arr2[0][1] + "</th>";
                            temp += "</tr>";
                            temp += "</thead>";

                            temp += "<tbody>";
                            for (let i = 1; i < arr.length - 1; i++) {
                                temp += "<tr>";
                                temp += "<td>" + arr2[i][0] + "</td>";
                                temp += "<td> " + arr2[i][1] + " </td>";
                                temp += "</tr>";
                            }
                            temp += "</tbody>";
                            temp += "</table>";

                            document.getElementById('rslt_qry12').innerHTML += temp;

                            const root = ReactDOM.createRoot(document.getElementById('graph_qry12')); 
                            root.render(<BarChart datax={disp1} GraphLabel="Commentry Count" datay={disp2}/>);
                        }
                        catch (error) {
                            console.log("1. Error => ", error);

                            document.getElementById('rslt_qry12').innerHTML = "Error => " + error;
                        }
                    })
                    .catch(error => {
                        console.log("2. Error => ", error);

                        document.getElementById('rslt_qry12').innerHTML = "Error => " + error;
                    })
            }
            else                        // for speciffic surah no.
            {
                theme_query = `PREFIX : <http://www.tafsirtabari.com/ontology#>
                PREFIX W3:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                
                select   ?Commentary_count(count( ?Commentary) as  ?Commentary_count)  
                
                where {
                 
                    ?Theme rdf:type :Theme.
                    
                    ?Theme :hasName "` + variable + `".
                    
                    ?Commentary :hasTheme ?Theme.
                    
                    ?Commentary rdf:type :Commentary.
                    
                    
                }
                `;

                let query = encodeURIComponent(theme_query);
                let url = base_url + query + '&format=application%2Fsparql-results%2Bjson&timeout=0';

                console.log("URL => ", url);

                fetch(url)
                    .then(async response => {
                        console.log(response.status, " | ", response.statusText, " | ", typeof (response));
                        console.log(response);

                        try {
                            const data = await response.text();

                            console.log("Response => ", data);

                            var arr = data.split('\n');
                            console.log("Arr:\n", arr);

                            var temp = "Number of commentry for theme ";
                            temp += variable;
                            temp += " => ";
                            temp += arr[1];

                            document.getElementById('rslt_qry12').innerHTML += temp;

                        }
                        catch (error) {
                            console.log("1. Error => ", error);

                            document.getElementById('rslt_qry12').innerHTML = "Error => " + error;
                        }
                    })
                    .catch(error => {
                        console.log("2. Error => ", error);

                        document.getElementById('rslt_qry12').innerHTML = "Error => " + error;
                    })
            }
        }
    }

    Query13 = (event) => {
        event.preventDefault();
        // console.log("Query13 event.target[0].value: ", event.target[0].value);

        var variable = event.target[0].value;

        document.getElementById('rslt_qry13').innerHTML = "";
        document.getElementById('graph_qry13').innerHTML = '';

        {
            console.log("Query13 Processing");

            let theme_query;

            if (variable === '0')          // for all
            {
                theme_query = `PREFIX : <http://www.tafsirtabari.com/ontology#>
                PREFIX W3:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                
                select ?Narrator_Name  ?Hadis_count(count( ?Hadis ) as  ?Hadis_count)  
                
                where {
                 
                       ?Hadis rdf:type :Hadith.
                    
                       ?Narrator_Chain :isPartOfHadith ?Hadis.
                    
                       ?Narrator_Chain :hasRootNarratorSegment ?Root_Narrator.
                    
                       ?Root_Narrator :refersTo ?Narrator.	
                    
                       ?Narrator :hasName ?Narrator_Name.
                        
                      #?Narrator :hasName 'مجاهد'. <- insert narrator name in place of mujahid for getting count of specific narrator and remove groupby 
                
                
                    
                }group by ?Narrator_Name
                `;

                let query = encodeURIComponent(theme_query);
                let url = base_url + query + '&format=application%2Fsparql-results%2Bjson&timeout=0';

                console.log("URL => ", url);

                fetch(url)
                    .then(async response => {
                        console.log(response.status, " | ", response.statusText, " | ", typeof (response));
                        console.log(response);

                        try {
                            const data = await response.text();

                            console.log("Response => ", data);

                            var arr = data.split('\n');
                            var arr2 = [];

                            for (let i = 0; i < arr.length; i++) {
                                arr2[i] = arr[i].split(',');
                            }

                            console.log("Arr2:\n", arr2);

                            var disp1 = [];
                            var disp2 = [];

                            for (let i = 1; i < arr.length - 1; i++) {
                                disp1[i] = arr2[i][0];
                                disp2[i] = arr2[i][1];
                            }

                            console.log("Disp1 => \n", disp1);

                            // console.log("Disp1");
                            // for (let index = 0; index < disp1.length; index++)
                            // {
                            //     console.log(disp1[index]);
                            // }

                            console.log("Disp2 => \n", disp2);

                            var temp = "";

                            temp += "<table className='tableCenter'>";
                            temp += "<thead>";
                            temp += "<tr>";
                            temp += "<th>" + arr2[0][0] + "</th>";
                            temp += "<th>" + arr2[0][1] + "</th>";
                            temp += "</tr>";
                            temp += "</thead>";

                            temp += "<tbody>";
                            for (let i = 1; i < arr.length - 1; i++) {
                                temp += "<tr>";
                                temp += "<td>" + arr2[i][0] + "</td>";
                                temp += "<td> " + arr2[i][1] + " </td>";
                                temp += "</tr>";
                            }
                            temp += "</tbody>";
                            temp += "</table>";

                            document.getElementById('rslt_qry13').innerHTML += temp;

                            const root = ReactDOM.createRoot(document.getElementById('graph_qry13')); 
                            root.render(<BarChart datax={disp1} GraphLabel="Number of Hadith by Root Narrator" datay={disp2}/>);
                        }
                        catch (error) {
                            console.log("1. Error => ", error);

                            document.getElementById('rslt_qry13').innerHTML = "Error => " + error;
                        }
                    })
                    .catch(error => {
                        console.log("2. Error => ", error);

                        document.getElementById('rslt_qry13').innerHTML = "Error => " + error;
                    })
            }
            else                        // for speciffic surah no.
            {
                theme_query = `PREFIX : <http://www.tafsirtabari.com/ontology#>
                PREFIX W3:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                
                select  ?Hadis_count(count( ?Hadis ) as  ?Hadis_count)  
                
                where {
                 
                       ?Hadis rdf:type :Hadith.
                    
                       ?Narrator_Chain :isPartOfHadith ?Hadis.
                    
                       ?Narrator_Chain :hasRootNarratorSegment ?Root_Narrator.
                    
                       ?Root_Narrator :refersTo ?Narrator.	
                    
                       ?Narrator :hasName "` + variable + `".
                      
                
                
                    
                }
                `;

                let query = encodeURIComponent(theme_query);
                let url = base_url + query + '&format=application%2Fsparql-results%2Bjson&timeout=0';

                console.log("URL => ", url);

                fetch(url)
                    .then(async response => {
                        console.log(response.status, " | ", response.statusText, " | ", typeof (response));
                        console.log(response);

                        try {
                            const data = await response.text();

                            console.log("Response => ", data);

                            var arr = data.split('\n');
                            console.log("Arr:\n", arr);

                            var temp = "Hadith count of root narrator (";
                            temp += variable;
                            temp += ") => ";
                            temp += arr[1];

                            document.getElementById('rslt_qry13').innerHTML += temp;

                        }
                        catch (error) {
                            console.log("1. Error => ", error);

                            document.getElementById('rslt_qry13').innerHTML = "Error => " + error;
                        }
                    })
                    .catch(error => {
                        console.log("2. Error => ", error);

                        document.getElementById('rslt_qry13').innerHTML = "Error => " + error;
                    })
            }
        }
    }

    Query14 = (event) => {
        event.preventDefault();
        // console.log("Query14 event.target[0].value: ", event.target[0].value);

        var variable = event.target[0].value;

        document.getElementById('rslt_qry14').innerHTML = "";
        document.getElementById('graph_qry14').innerHTML = '';

        {
            console.log("Query14 Processing");

            let theme_query;

            if (variable === '0')          // for all
            {
                theme_query = `PREFIX : <http://www.tafsirtabari.com/ontology#>
                PREFIX W3:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                
                select ?SubTheme_Name  ?Hadis_count(count( ?Hadis ) as  ?Hadis_count)  
                
                where {
                 
                    
                 ?SubTheme rdf:type :SubTheme.
                    
                    ?SubTheme :hasName ?SubTheme_Name.
                    
                    ?Hadis rdf:type :Hadith.
                    
                    ?SubTheme :isSubThemeOf ?Hadith.
                        
                    
                    
                }group by ?SubTheme_Name
                `;

                let query = encodeURIComponent(theme_query);
                let url = base_url + query + '&format=application%2Fsparql-results%2Bjson&timeout=0';

                console.log("URL => ", url);

                fetch(url)
                    .then(async response => {
                        console.log(response.status, " | ", response.statusText, " | ", typeof (response));
                        console.log(response);

                        try {
                            const data = await response.text();

                            console.log("Response => ", data);

                            var arr = data.split('\n');
                            var arr2 = [];

                            for (let i = 0; i < arr.length; i++) {
                                arr2[i] = arr[i].split(',');
                            }

                            console.log("Arr2:\n", arr2);

                            var disp1 = [];
                            var disp2 = [];

                            for (let i = 1; i < arr.length - 1; i++) {
                                disp1[i] = arr2[i][0];
                                disp2[i] = arr2[i][1];
                            }

                            console.log("Disp1 => \n", disp1);
                            console.log("Disp2 => \n", disp2);

                            var temp = "";

                            temp += "<table className='tableCenter'>";
                            temp += "<thead>";
                            temp += "<tr>";
                            temp += "<th>" + arr2[0][0] + "</th>";
                            temp += "<th>" + arr2[0][1] + "</th>";
                            temp += "</tr>";
                            temp += "</thead>";

                            temp += "<tbody>";
                            for (let i = 1; i < arr.length - 1; i++) {
                                temp += "<tr>";
                                temp += "<td>" + arr2[i][0] + "</td>";
                                temp += "<td> " + arr2[i][1] + " </td>";
                                temp += "</tr>";
                            }
                            temp += "</tbody>";
                            temp += "</table>";

                            document.getElementById('rslt_qry14').innerHTML += temp;

                            const root = ReactDOM.createRoot(document.getElementById('graph_qry14')); 
                            root.render(<BarChart datax={disp1} GraphLabel="Number of Hadith" datay={disp2}/>);
                        }
                        catch (error) {
                            console.log("1. Error => ", error);

                            document.getElementById('rslt_qry14').innerHTML = "Error => " + error;
                        }
                    })
                    .catch(error => {
                        console.log("2. Error => ", error);

                        document.getElementById('rslt_qry14').innerHTML = "Error => " + error;
                    })
            }
            else                        // for speciffic surah no.
            {
                theme_query = `PREFIX : <http://www.tafsirtabari.com/ontology#>
                PREFIX W3:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                
                select   ?Hadis_count(count( ?Hadis ) as  ?Hadis_count)  
                
                where {
                 
                    
                 ?SubTheme rdf:type :SubTheme.
                    
                    ?SubTheme :hasName "` + variable + `".
                    
                    ?Hadis rdf:type :Hadith.
                    
                    ?SubTheme :isSubThemeOf ?Hadith.
                        
                    
                    
                }
                `;

                let query = encodeURIComponent(theme_query);
                let url = base_url + query + '&format=application%2Fsparql-results%2Bjson&timeout=0';

                console.log("URL => ", url);

                fetch(url)
                    .then(async response => {
                        console.log(response.status, " | ", response.statusText, " | ", typeof (response));
                        console.log(response);

                        try {
                            const data = await response.text();

                            console.log("Response => ", data);

                            var arr = data.split('\n');
                            console.log("Arr:\n", arr);

                            var temp = "Hadith count for Sub-theme ";
                            temp += variable;
                            temp += " => ";
                            temp += arr[1];

                            document.getElementById('rslt_qry14').innerHTML += temp;

                        }
                        catch (error) {
                            console.log("1. Error => ", error);

                            document.getElementById('rslt_qry14').innerHTML = "Error => " + error;
                        }
                    })
                    .catch(error => {
                        console.log("2. Error => ", error);

                        document.getElementById('rslt_qry14').innerHTML = "Error => " + error;
                    })
            }
        }
    }

    Query15 = (event) => {
        event.preventDefault();
        // console.log("Query15 event.target[0].value: ", event.target[0].value);

        var variable = event.target[0].value;

        document.getElementById('rslt_qry15').innerHTML = "";
        document.getElementById('graph_qry15').innerHTML = '';

        {
            console.log("Query15 Processing");

            let theme_query;

            if (variable === '0')          // for all
            {
                theme_query = `PREFIX : <http://www.tafsirtabari.com/ontology#>
                PREFIX W3:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                
                select ?SubTheme_Name  ?ThematicVerse_count(count( ?ThematicVerse) as  ?ThematicVerse_count)  
                
                where {
                 
                    
                   ?SubTheme rdf:type :SubTheme.
                    
                    ?SubTheme :hasName ?SubTheme_Name.
                    
                    ?ThematicVerse rdf:type :ThematicVerse.
                    
                    ?ThematicVerse :hasSubTheme ?SubTheme.
                        
                    
                    
                }group by ?SubTheme_Name
                `;

                let query = encodeURIComponent(theme_query);
                let url = base_url + query + '&format=application%2Fsparql-results%2Bjson&timeout=0';

                console.log("URL => ", url);

                fetch(url)
                    .then(async response => {
                        console.log(response.status, " | ", response.statusText, " | ", typeof (response));
                        console.log(response);

                        try {
                            const data = await response.text();

                            console.log("Response => ", data);

                            var arr = data.split('\n');
                            var arr2 = [];

                            for (let i = 0; i < arr.length; i++) {
                                arr2[i] = arr[i].split(',');
                            }

                            console.log("Arr2:\n", arr2);

                            var disp1 = [];
                            var disp2 = [];

                            for (let i = 1; i < arr.length - 1; i++) {
                                disp1[i] = arr2[i][0];
                                disp2[i] = arr2[i][1];
                            }

                            console.log("Disp1 => \n", disp1);
                            console.log("Disp2 => \n", disp2);

                            var temp = "";

                            temp += "<table className='tableCenter'>";
                            temp += "<thead>";
                            temp += "<tr>";
                            temp += "<th>" + arr2[0][0] + "</th>";
                            temp += "<th>" + arr2[0][1] + "</th>";
                            temp += "</tr>";
                            temp += "</thead>";

                            temp += "<tbody>";
                            for (let i = 1; i < arr.length - 1; i++) {
                                temp += "<tr>";
                                temp += "<td>" + arr2[i][0] + "</td>";
                                temp += "<td> " + arr2[i][1] + " </td>";
                                temp += "</tr>";
                            }
                            temp += "</tbody>";
                            temp += "</table>";

                            document.getElementById('rslt_qry15').innerHTML += temp;

                            const root = ReactDOM.createRoot(document.getElementById('graph_qry15')); 
                            root.render(<BarChart datax={disp1} GraphLabel="Subtheme Thematic Verse Count" datay={disp2}/>);
                        }
                        catch (error) {
                            console.log("1. Error => ", error);

                            document.getElementById('rslt_qry15').innerHTML = "Error => " + error;
                        }
                    })
                    .catch(error => {
                        console.log("2. Error => ", error);

                        document.getElementById('rslt_qry15').innerHTML = "Error => " + error;
                    })
            }
            else                        // for speciffic surah no.
            {
                theme_query = `PREFIX : <http://www.tafsirtabari.com/ontology#>
                PREFIX W3:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                
                select   ?ThematicVerse_count(count( ?ThematicVerse) as  ?ThematicVerse_count)  
                
                where {
                 
                    
                   ?SubTheme rdf:type :SubTheme.
                    
                    ?SubTheme :hasName "` + variable + `".
                    
                    ?ThematicVerse rdf:type :ThematicVerse.
                    
                    ?ThematicVerse :hasSubTheme ?SubTheme.
                        
                    
                    
                }
                `;

                let query = encodeURIComponent(theme_query);
                let url = base_url + query + '&format=application%2Fsparql-results%2Bjson&timeout=0';

                console.log("URL => ", url);

                fetch(url)
                    .then(async response => {
                        console.log(response.status, " | ", response.statusText, " | ", typeof (response));
                        console.log(response);

                        try {
                            const data = await response.text();

                            console.log("Response => ", data);

                            var arr = data.split('\n');
                            console.log("Arr:\n", arr);

                            var temp = "Thematic Verse count for Sub-Theme ";
                            temp += variable;
                            temp += " => ";
                            temp += arr[1];

                            document.getElementById('rslt_qry15').innerHTML += temp;

                        }
                        catch (error) {
                            console.log("1. Error => ", error);

                            document.getElementById('rslt_qry15').innerHTML = "Error => " + error;
                        }
                    })
                    .catch(error => {
                        console.log("2. Error => ", error);

                        document.getElementById('rslt_qry15').innerHTML = "Error => " + error;
                    })
            }
        }
    }

    Query16 = (event) => {
        event.preventDefault();
        // console.log("Query16 event.target[0].value: ", event.target[0].value);

        var variable = event.target[0].value;

        document.getElementById('rslt_qry16').innerHTML = "";
        document.getElementById('graph_qry16').innerHTML = '';

        {
            console.log("Query16 Processing");

            let theme_query;

            if (variable === '0')          // for all
            {
                theme_query = `PREFIX : <http://www.tafsirtabari.com/ontology#>
                PREFIX W3:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                
                select ?SubTheme_Name  ?ThematicVerseFragment_count(count( ?ThematicVerseFragment) as  ?ThematicVerseFragment_count)  
                
                where {
                 
                    
                   ?SubTheme rdf:type :SubTheme.
                    
                    ?SubTheme :hasName ?SubTheme_Name.
                    
                    ?ThematicVerseFragment rdf:type :ThematicVerseFragment.
                    
                    ?ThematicVerseFragment :hasSubTheme ?SubTheme.
                        
                    
                    
                }group by ?SubTheme_Name
                `;

                let query = encodeURIComponent(theme_query);
                let url = base_url + query + '&format=application%2Fsparql-results%2Bjson&timeout=0';

                console.log("URL => ", url);

                fetch(url)
                    .then(async response => {
                        console.log(response.status, " | ", response.statusText, " | ", typeof (response));
                        console.log(response);

                        try {
                            const data = await response.text();

                            console.log("Response => ", data);

                            var arr = data.split('\n');
                            var arr2 = [];

                            for (let i = 0; i < arr.length; i++) {
                                arr2[i] = arr[i].split(',');
                            }

                            console.log("Arr2:\n", arr2);

                            var disp1 = [];
                            var disp2 = [];

                            for (let i = 1; i < arr.length - 1; i++) {
                                disp1[i] = arr2[i][0];
                                disp2[i] = arr2[i][1];
                            }

                            console.log("Disp1 => \n", disp1);
                            console.log("Disp2 => \n", disp2);

                            var temp = "";

                            temp += "<table className='tableCenter'>";
                            temp += "<thead>";
                            temp += "<tr>";
                            temp += "<th>" + arr2[0][0] + "</th>";
                            temp += "<th>" + arr2[0][1] + "</th>";
                            temp += "</tr>";
                            temp += "</thead>";

                            temp += "<tbody>";
                            for (let i = 1; i < arr.length - 1; i++) {
                                temp += "<tr>";
                                temp += "<td>" + arr2[i][0] + "</td>";
                                temp += "<td> " + arr2[i][1] + " </td>";
                                temp += "</tr>";
                            }
                            temp += "</tbody>";
                            temp += "</table>";

                            document.getElementById('rslt_qry16').innerHTML += temp;

                            const root = ReactDOM.createRoot(document.getElementById('graph_qry16')); 
                            root.render(<BarChart datax={disp1} GraphLabel="Sub-Theme Thematic Verse Fragment Count" datay={disp2}/>);
                        }
                        catch (error) {
                            console.log("1. Error => ", error);

                            document.getElementById('rslt_qry16').innerHTML = "Error => " + error;
                        }
                    })
                    .catch(error => {
                        console.log("2. Error => ", error);

                        document.getElementById('rslt_qry16').innerHTML = "Error => " + error;
                    })
            }
            else                        // for speciffic surah no.
            {
                theme_query = `PREFIX : <http://www.tafsirtabari.com/ontology#>
                PREFIX W3:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                
                select   ?ThematicVerseFragment_count(count( ?ThematicVerseFragment) as  ?ThematicVerseFragment_count)  
                
                where {
                 
                    
                   ?SubTheme rdf:type :SubTheme.
                    
                    ?SubTheme :hasName "` + variable + `".
                    
                    ?ThematicVerseFragment rdf:type :ThematicVerseFragment.
                    
                    ?ThematicVerseFragment :hasSubTheme ?SubTheme.
                        
                    
                    
                }
                `;

                let query = encodeURIComponent(theme_query);
                let url = base_url + query + '&format=application%2Fsparql-results%2Bjson&timeout=0';

                console.log("URL => ", url);

                fetch(url)
                    .then(async response => {
                        console.log(response.status, " | ", response.statusText, " | ", typeof (response));
                        console.log(response);

                        try {
                            const data = await response.text();

                            console.log("Response => ", data);

                            var arr = data.split('\n');
                            console.log("Arr:\n", arr);

                            var temp = "Thematic Verse Fragment count for Sub-Theme ";
                            temp += variable;
                            temp += " => ";
                            temp += arr[1];

                            document.getElementById('rslt_qry16').innerHTML += temp;

                        }
                        catch (error) {
                            console.log("1. Error => ", error);

                            document.getElementById('rslt_qry16').innerHTML = "Error => " + error;
                        }
                    })
                    .catch(error => {
                        console.log("2. Error => ", error);

                        document.getElementById('rslt_qry16').innerHTML = "Error => " + error;
                    })
            }
        }
    }

    Query17 = (event) => {
        event.preventDefault();
        // console.log("Query17 event.target[0].value: ", event.target[0].value);

        var variable = event.target[0].value;

        document.getElementById('rslt_qry17').innerHTML = "";
        document.getElementById('graph_qry17').innerHTML = '';

        {
            console.log("Query17 Processing");

            let theme_query;

            if (variable === '0')          // for all
            {
                theme_query = `PREFIX : <http://www.tafsirtabari.com/ontology#>
                PREFIX W3:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                
                select ?SubTheme_Name  ?Segment_count(count( ?Segment) as  ?Segment_count)  
                
                where {
                 
                    
                   ?SubTheme rdf:type :SubTheme.
                    
                    ?SubTheme :hasName ?SubTheme_Name.
                    
                    ?Segment rdf:type :Segment.
                    
                    ?Segment :hasSubTheme ?SubTheme.
                        
                    
                    
                }group by ?SubTheme_Name
                `;

                let query = encodeURIComponent(theme_query);
                let url = base_url + query + '&format=application%2Fsparql-results%2Bjson&timeout=0';

                console.log("URL => ", url);

                fetch(url)
                    .then(async response => {
                        console.log(response.status, " | ", response.statusText, " | ", typeof (response));
                        console.log(response);

                        try {
                            const data = await response.text();

                            console.log("Response => ", data);

                            var arr = data.split('\n');
                            var arr2 = [];

                            for (let i = 0; i < arr.length; i++) {
                                arr2[i] = arr[i].split(',');
                            }

                            console.log("Arr2:\n", arr2);

                            var disp1 = [];
                            var disp2 = [];

                            for (let i = 1; i < arr.length - 1; i++) {
                                disp1[i] = arr2[i][0];
                                disp2[i] = arr2[i][1];
                            }

                            console.log("Disp1 => \n", disp1);
                            console.log("Disp2 => \n", disp2);

                            var temp = "";

                            temp += "<table className='tableCenter'>";
                            temp += "<thead>";
                            temp += "<tr>";
                            temp += "<th>" + arr2[0][0] + "</th>";
                            temp += "<th>" + arr2[0][1] + "</th>";
                            temp += "</tr>";
                            temp += "</thead>";

                            temp += "<tbody>";
                            for (let i = 1; i < arr.length - 1; i++) {
                                temp += "<tr>";
                                temp += "<td>" + arr2[i][0] + "</td>";
                                temp += "<td> " + arr2[i][1] + " </td>";
                                temp += "</tr>";
                            }
                            temp += "</tbody>";
                            temp += "</table>";

                            document.getElementById('rslt_qry17').innerHTML += temp;

                            const root = ReactDOM.createRoot(document.getElementById('graph_qry17')); 
                            root.render(<BarChart datax={disp1} GraphLabel="Sub-Theme Segment count" datay={disp2}/>);
                        }
                        catch (error) {
                            console.log("1. Error => ", error);

                            document.getElementById('rslt_qry17').innerHTML = "Error => " + error;
                        }
                    })
                    .catch(error => {
                        console.log("2. Error => ", error);

                        document.getElementById('rslt_qry17').innerHTML = "Error => " + error;
                    })
            }
            else                        // for speciffic surah no.
            {
                theme_query = `PREFIX : <http://www.tafsirtabari.com/ontology#>
                PREFIX W3:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                
                select   ?Segment_count(count( ?Segment) as  ?Segment_count)  
                
                where {
                 
                    
                   ?SubTheme rdf:type :SubTheme.
                    
                    ?SubTheme :hasName "` + variable + `".
                    
                    ?Segment rdf:type :Segment.
                    
                    ?Segment :hasSubTheme ?SubTheme.
                        
                    
                    
                }
                `;

                let query = encodeURIComponent(theme_query);
                let url = base_url + query + '&format=application%2Fsparql-results%2Bjson&timeout=0';

                console.log("URL => ", url);

                fetch(url)
                    .then(async response => {
                        console.log(response.status, " | ", response.statusText, " | ", typeof (response));
                        console.log(response);

                        try {
                            const data = await response.text();

                            console.log("Response => ", data);

                            var arr = data.split('\n');
                            console.log("Arr:\n", arr);

                            var temp = "Segment count for Sub-Theme ";
                            temp += variable;
                            temp += " => ";
                            temp += arr[1];

                            document.getElementById('rslt_qry17').innerHTML += temp;

                        }
                        catch (error) {
                            console.log("1. Error => ", error);

                            document.getElementById('rslt_qry17').innerHTML = "Error => " + error;
                        }
                    })
                    .catch(error => {
                        console.log("2. Error => ", error);

                        document.getElementById('rslt_qry17').innerHTML = "Error => " + error;
                    })
            }
        }
    }

    Query18 = (event) => {
        event.preventDefault();
        // console.log("Query18 event.target[0].value: ", event.target[0].value);

        var variable = event.target[0].value;

        document.getElementById('rslt_qry18').innerHTML = "";
        document.getElementById('graph_qry18').innerHTML = '';

        {
            console.log("Query18 Processing");

            let theme_query;

            if (variable === '0')          // for all
            {
                theme_query = `PREFIX : <http://www.tafsirtabari.com/ontology#>
                PREFIX W3:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                PREFIX owl: <http://www.w3.org/2002/07/owl#>
                
                select ?SubTheme_Name  ?NarratorType_count(count( ?NarratorType) as ?NarratorType_count)  
                
                where {
                 
                    
                   ?SubTheme rdf:type :SubTheme.
                    
                    ?SubTheme :hasName ?SubTheme_Name.
                    
                    ?NarratorType rdf:type :NarratorType.
                    
                    ?NarratorType :isSubThemeOf ?SubTheme.
                        
                    
                    
                }group by ?SubTheme_Name
                `;

                let query = encodeURIComponent(theme_query);
                let url = base_url + query + '&format=application%2Fsparql-results%2Bjson&timeout=0';

                console.log("URL => ", url);

                fetch(url)
                    .then(async response => {
                        console.log(response.status, " | ", response.statusText, " | ", typeof (response));
                        console.log(response);

                        try {
                            const data = await response.text();

                            console.log("Response => ", data);

                            var arr = data.split('\n');
                            var arr2 = [];

                            for (let i = 0; i < arr.length; i++) {
                                arr2[i] = arr[i].split(',');
                            }

                            console.log("Arr2:\n", arr2);

                            var disp1 = [];
                            var disp2 = [];

                            for (let i = 1; i < arr.length - 1; i++) {
                                disp1[i] = arr2[i][0];
                                disp2[i] = arr2[i][1];
                            }

                            console.log("Disp1 => \n", disp1);
                            console.log("Disp2 => \n", disp2);

                            var temp = "";

                            temp += "<table className='tableCenter'>";
                            temp += "<thead>";
                            temp += "<tr>";
                            temp += "<th>" + arr2[0][0] + "</th>";
                            temp += "<th>" + arr2[0][1] + "</th>";
                            temp += "</tr>";
                            temp += "</thead>";

                            temp += "<tbody>";
                            for (let i = 1; i < arr.length - 1; i++) {
                                temp += "<tr>";
                                temp += "<td>" + arr2[i][0] + "</td>";
                                temp += "<td> " + arr2[i][1] + " </td>";
                                temp += "</tr>";
                            }
                            temp += "</tbody>";
                            temp += "</table>";

                            document.getElementById('rslt_qry18').innerHTML += temp;

                            const root = ReactDOM.createRoot(document.getElementById('graph_qry18')); 
                            root.render(<BarChart datax={disp1} GraphLabel="Sub-Theme Narrator Type count" datay={disp2}/>);
                        }
                        catch (error) {
                            console.log("1. Error => ", error);

                            document.getElementById('rslt_qry18').innerHTML = "Error => " + error;
                        }
                    })
                    .catch(error => {
                        console.log("2. Error => ", error);

                        document.getElementById('rslt_qry18').innerHTML = "Error => " + error;
                    })
            }
            else                        // for speciffic surah no.
            {
                theme_query = `PREFIX : <http://www.tafsirtabari.com/ontology#>
                PREFIX W3:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                PREFIX owl: <http://www.w3.org/2002/07/owl#>
                
                select   ?NarratorType_count(count( ?NarratorType) as ?NarratorType_count)  
                
                where {
                 
                    
                   ?SubTheme rdf:type :SubTheme.
                    
                    ?SubTheme :hasName "` + variable + `".
                    
                    ?NarratorType rdf:type :NarratorType.
                    
                    ?NarratorType :isSubThemeOf ?SubTheme.
                        
                    
                    
                }
                `;

                let query = encodeURIComponent(theme_query);
                let url = base_url + query + '&format=application%2Fsparql-results%2Bjson&timeout=0';

                console.log("URL => ", url);

                fetch(url)
                    .then(async response => {
                        console.log(response.status, " | ", response.statusText, " | ", typeof (response));
                        console.log(response);

                        try {
                            const data = await response.text();

                            console.log("Response => ", data);

                            var arr = data.split('\n');
                            console.log("Arr:\n", arr);

                            var temp = "Number of narrator type in Sub-Theme ";
                            temp += variable;
                            temp += " => ";
                            temp += arr[1];

                            document.getElementById('rslt_qry18').innerHTML += temp;

                        }
                        catch (error) {
                            console.log("1. Error => ", error);

                            document.getElementById('rslt_qry18').innerHTML = "Error => " + error;
                        }
                    })
                    .catch(error => {
                        console.log("2. Error => ", error);

                        document.getElementById('rslt_qry18').innerHTML = "Error => " + error;
                    })
            }
        }
    }

    Query19 = (event) => {
        event.preventDefault();
        // console.log("Query19 event.target[0].value: ", event.target[0].value);

        var variable = event.target[0].value;

        document.getElementById('rslt_qry19').innerHTML = "";
        document.getElementById('graph_qry19').innerHTML = '';

        {
            console.log("Query19 Processing");

            let theme_query;

            if (variable === '0')          // for all
            {
                theme_query = `PREFIX : <http://www.tafsirtabari.com/ontology#>
                PREFIX W3:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                PREFIX owl: <http://www.w3.org/2002/07/owl#>
                
                select ?Theme_Name  ?ThematicVerse_count(count( ?ThematicVerse) as ?ThematicVerse_count)  
                
                where {
                 
                    
                   ?Theme rdf:type :Theme.
                    
                    ?Theme :hasName ?Theme_Name.
                    
                    ?ThematicVerse rdf:type :ThematicVerse.
                    
                    ?ThematicVerse :hasSubTheme ?Theme.
                        
                    
                    
                }group by ?Theme_Name
                `;

                let query = encodeURIComponent(theme_query);
                let url = base_url + query + '&format=application%2Fsparql-results%2Bjson&timeout=0';

                console.log("URL => ", url);

                fetch(url)
                    .then(async response => {
                        console.log(response.status, " | ", response.statusText, " | ", typeof (response));
                        console.log(response);

                        try {
                            const data = await response.text();

                            console.log("Response => ", data);

                            var arr = data.split('\n');
                            var arr2 = [];

                            for (let i = 0; i < arr.length; i++) {
                                arr2[i] = arr[i].split(',');
                            }

                            console.log("Arr2:\n", arr2);

                            var disp1 = [];
                            var disp2 = [];

                            for (let i = 1; i < arr.length - 1; i++) {
                                disp1[i] = arr2[i][0];
                                disp2[i] = arr2[i][1];
                            }

                            console.log("Disp1 => \n", disp1);
                            console.log("Disp2 => \n", disp2);

                            var temp = "";

                            temp += "<table className='tableCenter'>";
                            temp += "<thead>";
                            temp += "<tr>";
                            temp += "<th>" + arr2[0][0] + "</th>";
                            temp += "<th>" + arr2[0][1] + "</th>";
                            temp += "</tr>";
                            temp += "</thead>";

                            temp += "<tbody>";
                            for (let i = 1; i < arr.length - 1; i++) {
                                temp += "<tr>";
                                temp += "<td>" + arr2[i][0] + "</td>";
                                temp += "<td> " + arr2[i][1] + " </td>";
                                temp += "</tr>";
                            }
                            temp += "</tbody>";
                            temp += "</table>";

                            document.getElementById('rslt_qry19').innerHTML += temp;

                            const root = ReactDOM.createRoot(document.getElementById('graph_qry19')); 
                            root.render(<BarChart datax={disp1} GraphLabel="Number of Segments in Each Hadith" datay={disp2}/>);
                        }
                        catch (error) {
                            console.log("1. Error => ", error);

                            document.getElementById('rslt_qry19').innerHTML = "Error => " + error;
                        }
                    })
                    .catch(error => {
                        console.log("2. Error => ", error);

                        document.getElementById('rslt_qry19').innerHTML = "Error => " + error;
                    })
            }
            else                        // for speciffic surah no.
            {
                theme_query = `PREFIX : <http://www.tafsirtabari.com/ontology#>
                PREFIX W3:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                PREFIX owl: <http://www.w3.org/2002/07/owl#>
                
                select   ?ThematicVerse_count(count( ?ThematicVerse) as ?ThematicVerse_count)  
                
                where {
                 
                    
                   ?Theme rdf:type :Theme.
                    
                    ?Theme :hasName "` + variable + `".
                    
                    ?ThematicVerse rdf:type :ThematicVerse.
                    
                    ?ThematicVerse :hasSubTheme ?Theme.
                        
                    
                    
                }
                `;

                let query = encodeURIComponent(theme_query);
                let url = base_url + query + '&format=application%2Fsparql-results%2Bjson&timeout=0'

                console.log("URL => ", url)

                fetch(url)
                    .then(async response => {
                        console.log(response.status, " | ", response.statusText, " | ", typeof (response));
                        console.log(response);

                        try {
                            const data = await response.text();

                            console.log("Response => ", data);

                            var arr = data.split('\n');
                            console.log("Arr:\n", arr);

                            var temp = "Thematic Verse count in Theme ";
                            temp += variable;
                            temp += " => ";
                            temp += arr[1];

                            document.getElementById('rslt_qry19').innerHTML += temp;

                        }
                        catch (error) {
                            console.log("1. Error => ", error);

                            document.getElementById('rslt_qry19').innerHTML = "Error => " + error;
                        }
                    })
                    .catch(error => {
                        console.log("2. Error => ", error);

                        document.getElementById('rslt_qry19').innerHTML = "Error => " + error;
                    })
            }
        }
    }

    Query20 = (event) => {
        event.preventDefault();
        // console.log("Query20 event.target[0].value: ", event.target[0].value);

        var variable = event.target[0].value;

        document.getElementById('rslt_qry20').innerHTML = "";
        document.getElementById('graph_qry20').innerHTML = '';

        {
            console.log("Query20 Processing");

            let theme_query;

            if (variable === '0')          // for all
            {
                theme_query = `PREFIX : <http://www.tafsirtabari.com/ontology#>
                PREFIX W3:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                PREFIX owl: <http://www.w3.org/2002/07/owl#>
                
                select ?Theme_Name  ?ThematicVerseFragment_count(count( ?ThematicVerseFragment) as ?ThematicVerseFragment_count)  
                
                where {
                 
                    
                   ?Theme rdf:type :Theme.
                    
                    ?Theme :hasName ?Theme_Name.
                    
                    ?ThematicVerseFragment rdf:type :ThematicVerseFragment.
                    
                    ?ThematicVerseFragment :hasSubTheme ?Theme.
                        
                    
                    
                }group by ?Theme_Name
                `;

                let query = encodeURIComponent(theme_query);
                let url = base_url + query + '&format=application%2Fsparql-results%2Bjson&timeout=0';

                console.log("URL => ", url);

                fetch(url)
                    .then(async response => {
                        console.log(response.status, " | ", response.statusText, " | ", typeof (response));
                        console.log(response);

                        try {
                            const data = await response.text();

                            console.log("Response => ", data);

                            var arr = data.split('\n');
                            var arr2 = [];

                            for (let i = 0; i < arr.length; i++) {
                                arr2[i] = arr[i].split(',');
                            }

                            console.log("Arr2:\n", arr2);

                            var disp1 = [];
                            var disp2 = [];

                            for (let i = 1; i < arr.length - 1; i++) {
                                disp1[i] = arr2[i][0];
                                disp2[i] = arr2[i][1];
                            }

                            console.log("Disp1 => \n", disp1);
                            console.log("Disp2 => \n", disp2);

                            var temp = "";

                            temp += "<table className='tableCenter'>";
                            temp += "<thead>";
                            temp += "<tr>";
                            temp += "<th>" + arr2[0][0] + "</th>";
                            temp += "<th>" + arr2[0][1] + "</th>";
                            temp += "</tr>";
                            temp += "</thead>";

                            temp += "<tbody>";
                            for (let i = 1; i < arr.length - 1; i++) {
                                temp += "<tr>";
                                temp += "<td>" + arr2[i][0] + "</td>";
                                temp += "<td> " + arr2[i][1] + " </td>";
                                temp += "</tr>";
                            }
                            temp += "</tbody>";
                            temp += "</table>";

                            document.getElementById('rslt_qry20').innerHTML += temp;

                            const root = ReactDOM.createRoot(document.getElementById('graph_qry20')); 
                            root.render(<BarChart datax={disp1} GraphLabel="Theme Thematic Verse fragment count" datay={disp2}/>);
                        }
                        catch (error) {
                            console.log("1. Error => ", error);

                            document.getElementById('rslt_qry20').innerHTML = "Error => " + error;
                        }
                    })
                    .catch(error => {
                        console.log("2. Error => ", error);

                        document.getElementById('rslt_qry20').innerHTML = "Error => " + error;
                    })
            }
            else                        // for speciffic surah no.
            {
                theme_query = `PREFIX : <http://www.tafsirtabari.com/ontology#>
                PREFIX W3:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                PREFIX owl: <http://www.w3.org/2002/07/owl#>
                
                select   ?ThematicVerseFragment_count(count( ?ThematicVerseFragment) as ?ThematicVerseFragment_count)  
                
                where {
                 
                    
                   ?Theme rdf:type :Theme.
                    
                    ?Theme :hasName "` + variable + `".
                    
                    ?ThematicVerseFragment rdf:type :ThematicVerseFragment.
                    
                    ?ThematicVerseFragment :hasSubTheme ?Theme.
                        
                    
                    
                }
                `;

                let query = encodeURIComponent(theme_query);
                let url = base_url + query + '&format=application%2Fsparql-results%2Bjson&timeout=0';

                console.log("URL => ", url);

                fetch(url)
                    .then(async response => {
                        console.log(response.status, " | ", response.statusText, " | ", typeof (response));
                        console.log(response);

                        try {
                            const data = await response.text();

                            console.log("Response => ", data);

                            var arr = data.split('\n');
                            console.log("Arr:\n", arr);

                            var temp = "Thematic Verse Fragment count for Theme ";
                            temp += variable;
                            temp += " => ";
                            temp += arr[1];

                            document.getElementById('rslt_qry20').innerHTML += temp;

                        }
                        catch (error) {
                            console.log("1. Error => ", error);

                            document.getElementById('rslt_qry20').innerHTML = "Error => " + error;
                        }
                    })
                    .catch(error => {
                        console.log("2. Error => ", error);

                        document.getElementById('rslt_qry20').innerHTML = "Error => " + error;
                    })
            }
        }
    }

    Query21 = (event) => {
        event.preventDefault();
        // console.log("Query21 event.target[0].value: ", event.target[0].value);

        var variable = event.target[0].value;

        document.getElementById('rslt_qry21').innerHTML = "";
        document.getElementById('graph_qry21').innerHTML = '';

        {
            console.log("Query21 Processing");

            let theme_query;

            if (variable === '0')          // for all
            {
                theme_query = `PREFIX : <http://www.tafsirtabari.com/ontology#>
                PREFIX W3:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                
                select ?Theme_Name  ?Segment_count(count( ?Segment) as  ?Segment_count)  
                
                where {
                 
                    
                   ?Theme rdf:type :Theme.
                    
                    ?Theme :hasName ?Theme_Name.
                    
                    ?Segment rdf:type :Segment.
                    
                    ?Segment :hasSubTheme ?Theme.
                        
                    
                    
                }group by ?Theme_Name
                `;

                let query = encodeURIComponent(theme_query);
                let url = base_url + query + '&format=application%2Fsparql-results%2Bjson&timeout=0'

                console.log("URL => ", url)

                fetch(url)
                    .then(async response => {
                        console.log(response.status, " | ", response.statusText, " | ", typeof (response));
                        console.log(response);

                        try {
                            const data = await response.text();

                            console.log("Response => ", data);

                            var arr = data.split('\n');
                            var arr2 = [];

                            for (let i = 0; i < arr.length; i++) {
                                arr2[i] = arr[i].split(',');
                            }

                            console.log("Arr2:\n", arr2);

                            var disp1 = [];
                            var disp2 = [];

                            for (let i = 1; i < arr.length - 1; i++) {
                                disp1[i] = arr2[i][0];
                                disp2[i] = arr2[i][1];
                            }

                            console.log("Disp1 => \n", disp1);
                            console.log("Disp2 => \n", disp2);

                            var temp = "";

                            temp += "<table className='tableCenter'>";
                            temp += "<thead>";
                            temp += "<tr>";
                            temp += "<th>" + arr2[0][0] + "</th>";
                            temp += "<th>" + arr2[0][1] + "</th>";
                            temp += "</tr>"
                            temp += "</thead>"

                            temp += "<tbody>";
                            for (let i = 1; i < arr.length - 1; i++) {
                                temp += "<tr>";
                                temp += "<td>" + arr2[i][0] + "</td>";
                                temp += "<td> " + arr2[i][1] + " </td>";
                                temp += "</tr>";
                            }
                            temp += "</tbody>";
                            temp += "</table>";

                            document.getElementById('rslt_qry21').innerHTML += temp;

                            const root = ReactDOM.createRoot(document.getElementById('graph_qry21')); 
                            root.render(<BarChart datax={disp1} GraphLabel="Theme Segment count" datay={disp2}/>);
                        }
                        catch (error) {
                            console.log("1. Error => ", error);

                            document.getElementById('rslt_qry21').innerHTML = "Error => " + error;
                        }
                    })
                    .catch(error => {
                        console.log("2. Error => ", error);

                        document.getElementById('rslt_qry21').innerHTML = "Error => " + error;
                    })
            }
            else                        // for speciffic surah no.
            {
                theme_query = `PREFIX : <http://www.tafsirtabari.com/ontology#>
                PREFIX W3:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                
                select   ?Segment_count(count( ?Segment) as  ?Segment_count)  
                
                where {
                 
                    
                   ?SubTheme rdf:type :SubTheme.
                    
                    ?SubTheme :hasName "` + variable + `".
                    
                    ?Segment rdf:type :Segment.
                    
                    ?Segment :hasSubTheme ?SubTheme.
                        
                    
                    
                }
                `;

                let query = encodeURIComponent(theme_query);
                let url = base_url + query + '&format=application%2Fsparql-results%2Bjson&timeout=0'

                console.log("URL => ", url)

                fetch(url)
                    .then(async response => {
                        console.log(response.status, " | ", response.statusText, " | ", typeof (response));
                        console.log(response);

                        try {
                            const data = await response.text();

                            console.log("Response => ", data);

                            var arr = data.split('\n');
                            console.log("Arr:\n", arr);

                            var temp = "Segment count for Theme ";
                            temp += variable;
                            temp += " => ";
                            temp += arr[1];

                            document.getElementById('rslt_qry21').innerHTML += temp;

                        }
                        catch (error) {
                            console.log("1. Error => ", error);

                            document.getElementById('rslt_qry21').innerHTML = "Error => " + error;
                        }
                    })
                    .catch(error => {
                        console.log("2. Error => ", error);

                        document.getElementById('rslt_qry21').innerHTML = "Error => " + error;
                    })
            }
        }
    }

    Query22 = (event) => {
        event.preventDefault();
        // console.log("Query22 event.target[0].value: ", event.target[0].value);

        var variable = event.target[0].value;

        document.getElementById('rslt_qry22').innerHTML = "";
        document.getElementById('graph_qry22').innerHTML = '';

        {
            console.log("Query22 Processing");

            let theme_query;

            if (variable === '0')          // for all
            {
                theme_query = `PREFIX : <http://www.tafsirtabari.com/ontology#>
                PREFIX W3:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                PREFIX owl: <http://www.w3.org/2002/07/owl#>
                
                select ?Theme_Name  ?NarratorType_count(count( ?NarratorType) as ?NarratorType_count)  
                
                where {
                 
                    
                  ?Theme rdf:type :Theme.
                    
                    ?Theme :hasName ?Theme_Name.
                   
                
                    
                    ?NarratorType rdf:type :NarratorType.
                    
                    ?NarratorType :isSubThemeOf ?Theme.
                        
                    
                    
                }group by ?Theme_Name
                `;

                let query = encodeURIComponent(theme_query);
                let url = base_url + query + '&format=application%2Fsparql-results%2Bjson&timeout=0';

                console.log("URL => ", url);

                fetch(url)
                    .then(async response => {
                        console.log(response.status, " | ", response.statusText, " | ", typeof (response));
                        console.log(response);

                        try {
                            const data = await response.text();

                            console.log("Response => ", data);

                            var arr = data.split('\n');
                            var arr2 = [];

                            for (let i = 0; i < arr.length; i++) {
                                arr2[i] = arr[i].split(',');
                            }

                            console.log("Arr2:\n", arr2);

                            var disp1 = [];
                            var disp2 = [];

                            for (let i = 1; i < arr.length - 1; i++) {
                                disp1[i] = arr2[i][0];
                                disp2[i] = arr2[i][1];
                            }

                            console.log("Disp1 => \n", disp1);
                            console.log("Disp2 => \n", disp2);

                            var temp = "";

                            temp += "<table className='tableCenter'>";
                            temp += "<thead>";
                            temp += "<tr>";
                            temp += "<th>" + arr2[0][0] + "</th>";
                            temp += "<th>" + arr2[0][1] + "</th>";
                            temp += "</tr>";
                            temp += "</thead>";

                            temp += "<tbody>";
                            for (let i = 1; i < arr.length - 1; i++) {
                                temp += "<tr>";
                                temp += "<td>" + arr2[i][0] + "</td>";
                                temp += "<td> " + arr2[i][1] + " </td>";
                                temp += "</tr>";
                            }
                            temp += "</tbody>";
                            temp += "</table>";

                            document.getElementById('rslt_qry22').innerHTML += temp;

                            const root = ReactDOM.createRoot(document.getElementById('graph_qry22')); 
                            root.render(<BarChart datax={disp1} GraphLabel="Theme Narrator Type count" datay={disp2}/>);
                        }
                        catch (error) {
                            console.log("1. Error => ", error);

                            document.getElementById('rslt_qry22').innerHTML = "Error => " + error;
                        }
                    })
                    .catch(error => {
                        console.log("2. Error => ", error);

                        document.getElementById('rslt_qry22').innerHTML = "Error => " + error;
                    })
            }
            else                        // for speciffic surah no.
            {
                theme_query = `PREFIX : <http://www.tafsirtabari.com/ontology#>
                PREFIX W3:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                PREFIX owl: <http://www.w3.org/2002/07/owl#>
                
                select   ?NarratorType_count(count( ?NarratorType) as ?NarratorType_count)  
                
                where {
                 
                    
                   ?SubTheme rdf:type :SubTheme.
                    
                    ?SubTheme :hasName "` + variable + `".
                    
                    ?NarratorType rdf:type :NarratorType.
                    
                    ?NarratorType :isSubThemeOf ?SubTheme.
                        
                    
                    
                }
                `;

                let query = encodeURIComponent(theme_query);
                let url = base_url + query + '&format=application%2Fsparql-results%2Bjson&timeout=0';

                console.log("URL => ", url);

                fetch(url)
                    .then(async response => {
                        console.log(response.status, " | ", response.statusText, " | ", typeof (response));
                        console.log(response);

                        try {
                            const data = await response.text();

                            console.log("Response => ", data);

                            var arr = data.split('\n');
                            console.log("Arr:\n", arr);

                            var temp = "Number of Narrator type in theme ";
                            temp += variable;
                            temp += " => ";
                            temp += arr[1];

                            document.getElementById('rslt_qry22').innerHTML += temp;

                        }
                        catch (error) {
                            console.log("1. Error => ", error);

                            document.getElementById('rslt_qry22').innerHTML = "Error => " + error;
                        }
                    })
                    .catch(error => {
                        console.log("2. Error => ", error);

                        document.getElementById('rslt_qry22').innerHTML = "Error => " + error;
                    })
            }
        }
    }

    Query23 = (event) => {
        event.preventDefault();
        // console.log("Query23 event.target[0].value: ", event.target[0].value);

        var variable = event.target[0].value;

        document.getElementById('rslt_qry23').innerHTML = "";
        document.getElementById('graph_qry23').innerHTML = '';

        {
            console.log("Query23 Processing");

            let theme_query;

            if (variable === '0')          // for all
            {
                theme_query = `PREFIX : <http://www.tafsirtabari.com/ontology#>
                PREFIX W3:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                
                select ?SubTheme_Name  ?Commentary_count(count( ?Commentary) as  ?Commentary_count)  
                
                where {
                 
                    ?SubTheme rdf:type :SubTheme.
                    
                    ?SubTheme :hasName ?SubTheme_Name.
                    
                    ?Commentary :hasTheme ?SubTheme.
                    
                    ?Commentary rdf:type :Commentary.
                    
                    
                }group by ?SubTheme_Name
                `;

                let query = encodeURIComponent(theme_query);
                let url = base_url + query + '&format=application%2Fsparql-results%2Bjson&timeout=0';

                console.log("URL => ", url);

                fetch(url)
                    .then(async response => {
                        console.log(response.status, " | ", response.statusText, " | ", typeof (response));
                        console.log(response);

                        try {
                            const data = await response.text();

                            console.log("Response => ", data);

                            var arr = data.split('\n');
                            var arr2 = [];

                            for (let i = 0; i < arr.length; i++) {
                                arr2[i] = arr[i].split(',');
                            }

                            console.log("Arr2:\n", arr2);

                            var disp1 = [];
                            var disp2 = [];

                            for (let i = 1; i < arr.length - 1; i++) {
                                disp1[i] = arr2[i][0];
                                disp2[i] = arr2[i][1];
                            }

                            console.log("Disp1 => \n", disp1);
                            console.log("Disp2 => \n", disp2);

                            var temp = "";

                            temp += "<table className='tableCenter'>";
                            temp += "<thead>";
                            temp += "<tr>";
                            temp += "<th>" + arr2[0][0] + "</th>";
                            temp += "<th>" + arr2[0][1] + "</th>";
                            temp += "</tr>";
                            temp += "</thead>";

                            temp += "<tbody>";
                            for (let i = 1; i < arr.length - 1; i++) {
                                temp += "<tr>";
                                temp += "<td>" + arr2[i][0] + "</td>";
                                temp += "<td> " + arr2[i][1] + " </td>";
                                temp += "</tr>";
                            }
                            temp += "</tbody>";
                            temp += "</table>";

                            document.getElementById('rslt_qry23').innerHTML += temp;

                            const root = ReactDOM.createRoot(document.getElementById('graph_qry23')); 
                            root.render(<BarChart datax={disp1} GraphLabel="Sub-Theme Commentry count" datay={disp2}/>);
                        }
                        catch (error) {
                            console.log("1. Error => ", error);

                            document.getElementById('rslt_qry23').innerHTML = "Error => " + error;
                        }
                    })
                    .catch(error => {
                        console.log("2. Error => ", error);

                        document.getElementById('rslt_qry23').innerHTML = "Error => " + error;
                    })
            }
            else                        // for speciffic surah no.
            {
                theme_query = `PREFIX : <http://www.tafsirtabari.com/ontology#>
                PREFIX W3:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                
                select   ?Commentary_count(count( ?Commentary) as  ?Commentary_count)  
                
                where {
                 
                    ?SubTheme rdf:type :SubTheme.
                    
                    ?SubTheme :hasName "` + variable + `".
                    
                    ?Commentary :hasTheme ?SubTheme.
                    
                    ?Commentary rdf:type :Commentary.
                    
                    
                }
                `;

                let query = encodeURIComponent(theme_query);
                let url = base_url + query + '&format=application%2Fsparql-results%2Bjson&timeout=0';

                console.log("URL => ", url);

                fetch(url)
                    .then(async response => {
                        console.log(response.status, " | ", response.statusText, " | ", typeof (response));
                        console.log(response);

                        try {
                            const data = await response.text();

                            console.log("Response => ", data);

                            var arr = data.split('\n');
                            console.log("Arr:\n", arr);

                            var temp = "Commentry count in Sub-Theme ";
                            temp += variable;
                            temp += " => ";
                            temp += arr[1];

                            document.getElementById('rslt_qry23').innerHTML += temp;

                        }
                        catch (error) {
                            console.log("1. Error => ", error);

                            document.getElementById('rslt_qry23').innerHTML = "Error => " + error;
                        }
                    })
                    .catch(error => {
                        console.log("2. Error => ", error);

                        document.getElementById('rslt_qry23').innerHTML = "Error => " + error;
                    })
            }
        }
    }

    Query24 = (event) => {
        event.preventDefault();
        // console.log("Query24 event.target[0].value: ", event.target[0].value);

        var variable = event.target[0].value;

        document.getElementById('rslt_qry24').innerHTML = "";
        document.getElementById('graph_qry24').innerHTML = '';

        {
            console.log("Query24 Processing");

            let theme_query;

            if (variable === '0')          // for all
            {
                theme_query = `PREFIX : <http://www.tafsirtabari.com/ontology#>
                PREFIX W3:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                PREFIX owl: <http://www.w3.org/2002/07/owl#>
                
                select ?Theme_Name  ?poetry_count(count( ?poetry) as ?poetry_count)  
                
                where {
                 
                    
                    ?poetry rdf:type :Poetry.
                    
                    ?commentary :references ?poetry.
                    
                    ?commentary rdf:type :Commentary.
                    
                    ?commentary :hasTheme ?Theme.
                    
                    ?Theme :hasName ?Theme_Name.
                   
                
                }group by ?Theme_Name
                `;

                let query = encodeURIComponent(theme_query);
                let url = base_url + query + '&format=application%2Fsparql-results%2Bjson&timeout=0';

                console.log("URL => ", url);

                fetch(url)
                    .then(async response => {
                        console.log(response.status, " | ", response.statusText, " | ", typeof (response));
                        console.log(response);

                        try {
                            const data = await response.text();

                            console.log("Response => ", data);

                            var arr = data.split('\n');
                            var arr2 = [];

                            for (let i = 0; i < arr.length; i++) {
                                arr2[i] = arr[i].split(',');
                            }

                            console.log("Arr2:\n", arr2);

                            var disp1 = [];
                            var disp2 = [];

                            for (let i = 1; i < arr.length - 1; i++) {
                                disp1[i] = arr2[i][0];
                                disp2[i] = arr2[i][1];
                            }

                            console.log("Disp1 => \n", disp1);
                            console.log("Disp2 => \n", disp2);

                            var temp = "";

                            temp += "<table className='tableCenter'>";
                            temp += "<thead>";
                            temp += "<tr>";
                            temp += "<th>" + arr2[0][0] + "</th>";
                            temp += "<th>" + arr2[0][1] + "</th>";
                            temp += "</tr>";
                            temp += "</thead>";

                            temp += "<tbody>";
                            for (let i = 1; i < arr.length - 1; i++) {
                                temp += "<tr>";
                                temp += "<td>" + arr2[i][0] + "</td>";
                                temp += "<td> " + arr2[i][1] + " </td>";
                                temp += "</tr>";
                            }
                            temp += "</tbody>";
                            temp += "</table>";

                            document.getElementById('rslt_qry24').innerHTML += temp;

                            const root = ReactDOM.createRoot(document.getElementById('graph_qry24')); 
                            root.render(<BarChart datax={disp1} GraphLabel="Theme Poetry count" datay={disp2}/>);
                        }
                        catch (error) {
                            console.log("1. Error => ", error);

                            document.getElementById('rslt_qry24').innerHTML = "Error => " + error;
                        }
                    })
                    .catch(error => {
                        console.log("2. Error => ", error);

                        document.getElementById('rslt_qry24').innerHTML = "Error => " + error;
                    })
            }
            else                        // for speciffic surah no.
            {
                theme_query = `PREFIX : <http://www.tafsirtabari.com/ontology#>
                PREFIX W3:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                PREFIX owl: <http://www.w3.org/2002/07/owl#>
                
                select   ?poetry_count(count( ?poetry) as ?poetry_count)  
                
                where {
                 
                    
                    ?poetry rdf:type :Poetry.
                    
                    ?commentary :references ?poetry.
                    
                    ?commentary rdf:type :Commentary.
                    
                    ?commentary :hasTheme ?Theme.
                    
                    ?Theme :hasName "` + variable + `".
                   
                
                }
                `;

                let query = encodeURIComponent(theme_query);
                let url = base_url + query + '&format=application%2Fsparql-results%2Bjson&timeout=0';

                console.log("URL => ", url);

                fetch(url)
                    .then(async response => {
                        console.log(response.status, " | ", response.statusText, " | ", typeof (response));
                        console.log(response);

                        try {
                            const data = await response.text();

                            console.log("Response => ", data);

                            var arr = data.split('\n');
                            console.log("Arr:\n", arr);

                            var temp = "Poetry count of Theme ";
                            temp += variable;
                            temp += " => ";
                            temp += arr[1];

                            document.getElementById('rslt_qry24').innerHTML += temp;

                        }
                        catch (error) {
                            console.log("1. Error => ", error);

                            document.getElementById('rslt_qry24').innerHTML = "Error => " + error;
                        }
                    })
                    .catch(error => {
                        console.log("2. Error => ", error);

                        document.getElementById('rslt_qry24').innerHTML = "Error => " + error;
                    })
            }
        }
    }

    Query25 = (event) => {
        event.preventDefault();
        // console.log("Query25 event.target[0].value: ", event.target[0].value);

        var variable = event.target[0].value;

        document.getElementById('rslt_qry25').innerHTML = "";
        document.getElementById('graph_qry25').innerHTML = '';

        {
            console.log("Query25 Processing");

            let theme_query;

            if (variable === '0')          // for all
            {
                theme_query = `PREFIX : <http://www.tafsirtabari.com/ontology#>
                PREFIX W3:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                PREFIX owl: <http://www.w3.org/2002/07/owl#>
                
                select ?Narrator_Name ?Hadis_count(count( ?Hadis) as ?Hadis_count)  
                
                where {
                 
                    
                        ?Hadis rdf:type :Hadith.
                    
                           ?Narrator_Chain :isPartOfHadith ?Hadis.
                
                        ?Narrator_Chain :hasNarratorSegment ?Narrator_ChainSegment.
                    
                        ?Narrator_ChainSegment :refersTo ?Narrator.
                    
                        ?Narrator :hasName ?Narrator_Name.
                   
                
                }group by ?Narrator_Name
                `;

                let query = encodeURIComponent(theme_query);
                let url = base_url + query + '&format=application%2Fsparql-results%2Bjson&timeout=0';

                console.log("URL => ", url);

                fetch(url)
                    .then(async response => {
                        console.log(response.status, " | ", response.statusText, " | ", typeof (response));
                        console.log(response);

                        try {
                            const data = await response.text();

                            console.log("Response => ", data);

                            var arr = data.split('\n');
                            var arr2 = [];

                            for (let i = 0; i < arr.length; i++) {
                                arr2[i] = arr[i].split(',');
                            }

                            console.log("Arr2:\n", arr2);

                            var disp1 = [];
                            var disp2 = [];

                            for (let i = 1; i < arr.length - 1; i++) {
                                disp1[i] = arr2[i][0];
                                disp2[i] = arr2[i][1];
                            }

                            console.log("Disp1 => \n", disp1);
                            console.log("Disp2 => \n", disp2);

                            var temp = "";

                            temp += "<table className='tableCenter'>";
                            temp += "<thead>";
                            temp += "<tr>";
                            temp += "<th>" + arr2[0][0] + "</th>";
                            temp += "<th>" + arr2[0][1] + "</th>";
                            temp += "</tr>";
                            temp += "</thead>";

                            temp += "<tbody>";
                            for (let i = 1; i < arr.length - 1; i++) {
                                temp += "<tr>";
                                temp += "<td>" + arr2[i][0] + "</td>";
                                temp += "<td> " + arr2[i][1] + " </td>";
                                temp += "</tr>";
                            }
                            temp += "</tbody>";
                            temp += "</table>";

                            document.getElementById('rslt_qry25').innerHTML += temp;

                            const root = ReactDOM.createRoot(document.getElementById('graph_qry25')); 
                            root.render(<BarChart datax={disp1} GraphLabel="Narrator Hadith count" datay={disp2}/>);
                        }
                        catch (error) {
                            console.log("1. Error => ", error);

                            document.getElementById('rslt_qry25').innerHTML = "Error => " + error;
                        }
                    })
                    .catch(error => {
                        console.log("2. Error => ", error);

                        document.getElementById('rslt_qry25').innerHTML = "Error => " + error;
                    })
            }
            else                        // for speciffic surah no.
            {
                theme_query = `PREFIX : <http://www.tafsirtabari.com/ontology#>
                PREFIX W3:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                PREFIX owl: <http://www.w3.org/2002/07/owl#>
                
                select  ?Hadis_count(count( ?Hadis) as ?Hadis_count)  
                
                where {
                 
                    
                        ?Hadis rdf:type :Hadith.
                    
                           ?Narrator_Chain :isPartOfHadith ?Hadis.
                
                        ?Narrator_Chain :hasNarratorSegment ?Narrator_ChainSegment.
                    
                        ?Narrator_ChainSegment :refersTo ?Narrator.
                    
                        ?Narrator :hasName "` + variable + `".
                   
                
                }
                `;

                let query = encodeURIComponent(theme_query);
                let url = base_url + query + '&format=application%2Fsparql-results%2Bjson&timeout=0';

                console.log("URL => ", url);

                fetch(url)
                    .then(async response => {
                        console.log(response.status, " | ", response.statusText, " | ", typeof (response));
                        console.log(response);

                        try {
                            const data = await response.text();

                            console.log("Response => ", data);

                            var arr = data.split('\n');
                            console.log("Arr:\n", arr);

                            var temp = "HAdith count of narrator (";
                            temp += variable;
                            temp += ") => ";
                            temp += arr[1];

                            document.getElementById('rslt_qry25').innerHTML += temp;

                        }
                        catch (error) {
                            console.log("1. Error => ", error);

                            document.getElementById('rslt_qry25').innerHTML = "Error => " + error;
                        }
                    })
                    .catch(error => {
                        console.log("2. Error => ", error);

                        document.getElementById('rslt_qry25').innerHTML = "Error => " + error;
                    })
            }
        }
    }

    Query26 = (event) => {
        event.preventDefault();
        // console.log("Query26 event.target[0].value: ", event.target[0].value);

        var variable = event.target[0].value;

        document.getElementById('rslt_qry26').innerHTML = "";
        document.getElementById('graph_qry26').innerHTML = '';

        {
            console.log("Query26 Processing");

            let theme_query;

            if (variable === '0')          // for all
            {
                theme_query = `PREFIX : <http://www.tafsirtabari.com/ontology#>
                PREFIX W3:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                
                select ?Surah_Name  ?Hadis_count(count( ?Hadis) as ?Hadis_count)  
                
                where {
                 
                     ?Hadis rdf:type :HadithText.
                    
                        ?Hadis :references ?Verse.
                    
                        ?Verse rdf:type :Verse.
                    
                        ?Surah :containsVerse ?Verse.
                    
                        ?Surah rdf:type :Surah.
                    
                        ?Surah :hasName ?Surah_Name.
                    
                    
                }group by ?Surah_Name
                `;

                let query = encodeURIComponent(theme_query);
                let url = base_url + query + '&format=application%2Fsparql-results%2Bjson&timeout=0';

                console.log("URL => ", url);

                fetch(url)
                    .then(async response => {
                        console.log(response.status, " | ", response.statusText, " | ", typeof (response));
                        console.log(response);

                        try {
                            const data = await response.text();

                            console.log("Response => ", data);

                            var arr = data.split('\n');
                            var arr2 = [];

                            for (let i = 0; i < arr.length; i++) {
                                arr2[i] = arr[i].split(',');
                            }

                            console.log("Arr2:\n", arr2);

                            var disp1 = [];
                            var disp2 = [];

                            for (let i = 1; i < arr.length - 1; i++) {
                                disp1[i] = arr2[i][0];
                                disp2[i] = arr2[i][1];
                            }

                            console.log("Disp1 => \n", disp1);
                            console.log("Disp2 => \n", disp2);

                            var temp = "";

                            temp += "<table className='tableCenter'>";
                            temp += "<thead>";
                            temp += "<tr>";
                            temp += "<th>" + arr2[0][0] + "</th>";
                            temp += "<th>" + arr2[0][1] + "</th>";
                            temp += "</tr>";
                            temp += "</thead>";

                            temp += "<tbody>";
                            for (let i = 1; i < arr.length - 1; i++) {
                                temp += "<tr>";
                                temp += "<td>" + arr2[i][0] + "</td>";
                                temp += "<td> " + arr2[i][1] + " </td>";
                                temp += "</tr>";
                            }
                            temp += "</tbody>";
                            temp += "</table>";

                            document.getElementById('rslt_qry26').innerHTML += temp;

                            const root = ReactDOM.createRoot(document.getElementById('graph_qry26')); 
                            root.render(<BarChart datax={disp1} GraphLabel="Surah Hadith count" datay={disp2}/>);
                        }
                        catch (error) {
                            console.log("1. Error => ", error);

                            document.getElementById('rslt_qry26').innerHTML = "Error => " + error;
                        }
                    })
                    .catch(error => {
                        console.log("2. Error => ", error);

                        document.getElementById('rslt_qry26').innerHTML = "Error => " + error;
                    })
            }
            else                        // for speciffic surah no.
            {
                theme_query = `PREFIX : <http://www.tafsirtabari.com/ontology#>
                PREFIX W3:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                
                select   ?Hadis_count(count( ?Hadis) as ?Hadis_count)  
                
                where {
                 
                     ?Hadis rdf:type :HadithText.
                    
                        ?Hadis :references ?Verse.
                    
                        ?Verse rdf:type :Verse.
                    
                        ?Surah :containsVerse ?Verse.
                    
                        ?Surah rdf:type :Surah.
                    
                        ?Surah :hasName "` + variable + `".
                    
                    
                }
                `;

                let query = encodeURIComponent(theme_query);
                let url = base_url + query + '&format=application%2Fsparql-results%2Bjson&timeout=0'

                console.log("URL => ", url)

                fetch(url)
                    .then(async response => {
                        console.log(response.status, " | ", response.statusText, " | ", typeof (response));
                        console.log(response);

                        try {
                            const data = await response.text();

                            console.log("Response => ", data);

                            var arr = data.split('\n');
                            console.log("Arr:\n", arr);

                            var temp = "Hadith count for Surah (";
                            temp += variable;
                            temp += ") =>";
                            temp += " ";
                            temp += arr[1];

                            document.getElementById('rslt_qry26').innerHTML += temp;

                        }
                        catch (error) {
                            console.log("1. Error => ", error);

                            document.getElementById('rslt_qry26').innerHTML = "Error => " + error;
                        }
                    })
                    .catch(error => {
                        console.log("2. Error => ", error);

                        document.getElementById('rslt_qry26').innerHTML = "Error => " + error;
                    })
            }
        }
    }

    Query27 = (event) => {
        event.preventDefault();
        // console.log("Query27 event.target[0].value: ", event.target[0].value);

        var variable = event.target[0].value;

        document.getElementById('rslt_qry27').innerHTML = "";
        document.getElementById('graph_qry27').innerHTML = '';

        {
            console.log("Query27 Processing");

            let theme_query;

            if (variable === '0')          // for all
            {
                theme_query = `PREFIX : <http://www.tafsirtabari.com/ontology#>
                PREFIX W3:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                
                select ?location_Name  ?Hadis_count(count( ?Hadis) as ?Hadis_count)  
                
                where {
                 
                     
                        ?Hadis rdf:type :Hadith.
                    
                        ?Hadis :mentions ?location.
                    
                        ?location rdf:type :Location.
                    
                        ?location :hasName ?location_Name.
                    
                    
                    
                }group by ?location_Name
                `;

                let query = encodeURIComponent(theme_query);
                let url = base_url + query + '&format=application%2Fsparql-results%2Bjson&timeout=0';

                console.log("URL => ", url);

                fetch(url)
                    .then(async response => {
                        console.log(response.status, " | ", response.statusText, " | ", typeof (response));
                        console.log(response);

                        try {
                            const data = await response.text();

                            console.log("Response => ", data);

                            var arr = data.split('\n');
                            var arr2 = [];

                            for (let i = 0; i < arr.length; i++) {
                                arr2[i] = arr[i].split(',');
                            }

                            console.log("Arr2:\n", arr2);

                            var disp1 = [];
                            var disp2 = [];

                            for (let i = 1; i < arr.length - 1; i++) {
                                disp1[i] = arr2[i][0];
                                disp2[i] = arr2[i][1];
                            }

                            console.log("Disp1 => \n", disp1);
                            console.log("Disp2 => \n", disp2);

                            var temp = "";

                            temp += "<table className='tableCenter'>";
                            temp += "<thead>";
                            temp += "<tr>";
                            temp += "<th>" + arr2[0][0] + "</th>";
                            temp += "<th>" + arr2[0][1] + "</th>";
                            temp += "</tr>";
                            temp += "</thead>";

                            temp += "<tbody>";
                            for (let i = 1; i < arr.length - 1; i++) {
                                temp += "<tr>";
                                temp += "<td>" + arr2[i][0] + "</td>";
                                temp += "<td> " + arr2[i][1] + " </td>";
                                temp += "</tr>";
                            }
                            temp += "</tbody>";
                            temp += "</table>";

                            document.getElementById('rslt_qry27').innerHTML += temp;

                            const root = ReactDOM.createRoot(document.getElementById('graph_qry27')); 
                            root.render(<BarChart datax={disp1} GraphLabel="Location Hadith count" datay={disp2}/>);
                        }
                        catch (error) {
                            console.log("1. Error => ", error);

                            document.getElementById('rslt_qry27').innerHTML = "Error => " + error;
                        }
                    })
                    .catch(error => {
                        console.log("2. Error => ", error);

                        document.getElementById('rslt_qry27').innerHTML = "Error => " + error;
                    })
            }
            else                        // for speciffic surah no.
            {
                theme_query = `PREFIX : <http://www.tafsirtabari.com/ontology#>
                PREFIX W3:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                
                select   ?Hadis_count(count( ?Hadis) as ?Hadis_count)  
                
                where {
                 
                     
                        ?Hadis rdf:type :Hadith.
                    
                        ?Hadis :mentions ?location.
                    
                        ?location rdf:type :Location.
                    
                        ?location :hasName "` + variable + `".
                    
                    
                    
                }
                `;

                let query = encodeURIComponent(theme_query);
                let url = base_url + query + '&format=application%2Fsparql-results%2Bjson&timeout=0';

                console.log("URL => ", url);

                fetch(url)
                    .then(async response => {
                        console.log(response.status, " | ", response.statusText, " | ", typeof (response));
                        console.log(response);

                        try {
                            const data = await response.text();

                            console.log("Response => ", data);

                            var arr = data.split('\n');
                            console.log("Arr:\n", arr);

                            var temp = "Segment count for Hadith (";
                            temp += variable;
                            temp += ") => ";
                            temp += arr[1];

                            document.getElementById('rslt_qry27').innerHTML += temp;

                        }
                        catch (error) {
                            console.log("1. Error => ", error);

                            document.getElementById('rslt_qry27').innerHTML = "Error => " + error;
                        }
                    })
                    .catch(error => {
                        console.log("2. Error => ", error);

                        document.getElementById('rslt_qry27').innerHTML = "Error => " + error;
                    })
            }
        }
    }

    Query28 = (event) => {
        event.preventDefault();
        // console.log("Query28 event.target[0].value: ", event.target[0].value);

        var variable = event.target[0].value;

        document.getElementById('rslt_qry28').innerHTML = "";
        document.getElementById('graph_qry28').innerHTML = '';

        {
            console.log("Query28 Processing");

            let theme_query;

            if (variable === '0')          // for all
            {
                theme_query = `PREFIX : <http://www.tafsirtabari.com/ontology#>
                PREFIX W3:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                
                select ?Organization_Name  ?Hadis_count(count( ?Hadis) as ?Hadis_count)  
                
                where {
                 
                     
                        ?Hadis rdf:type :Hadith.
                    
                        ?Hadis :mentions ?Organization.
                    
                        ?Organization rdf:type :Organization.
                    
                        ?Organization :hasName ?Organization_Name.
                    
                    
                    
                }group by ?Organization_Name
                `;

                let query = encodeURIComponent(theme_query);
                let url = base_url + query + '&format=application%2Fsparql-results%2Bjson&timeout=0';

                console.log("URL => ", url);

                fetch(url)
                    .then(async response => {
                        console.log(response.status, " | ", response.statusText, " | ", typeof (response));
                        console.log(response);

                        try {
                            const data = await response.text();

                            console.log("Response => ", data);

                            var arr = data.split('\n');
                            var arr2 = [];

                            for (let i = 0; i < arr.length; i++) {
                                arr2[i] = arr[i].split(',');
                            }

                            console.log("Arr2:\n", arr2);

                            var disp1 = [];
                            var disp2 = [];

                            for (let i = 1; i < arr.length - 1; i++) {
                                disp1[i] = arr2[i][0];
                                disp2[i] = arr2[i][1];
                            }

                            console.log("Disp1 => \n", disp1);
                            console.log("Disp2 => \n", disp2);

                            var temp = "";

                            temp += "<table className='tableCenter'>";
                            temp += "<thead>";
                            temp += "<tr>";
                            temp += "<th>" + arr2[0][0] + "</th>";
                            temp += "<th>" + arr2[0][1] + "</th>";
                            temp += "</tr>";
                            temp += "</thead>";

                            temp += "<tbody>";
                            for (let i = 1; i < arr.length - 1; i++) {
                                temp += "<tr>";
                                temp += "<td>" + arr2[i][0] + "</td>";
                                temp += "<td> " + arr2[i][1] + " </td>";
                                temp += "</tr>";
                            }
                            temp += "</tbody>";
                            temp += "</table>";

                            document.getElementById('rslt_qry28').innerHTML += temp;

                            const root = ReactDOM.createRoot(document.getElementById('graph_qry28')); 
                            root.render(<BarChart datax={disp1} GraphLabel="Organization Hadith count" datay={disp2}/>);
                        }
                        catch (error) {
                            console.log("1. Error => ", error);

                            document.getElementById('rslt_qry28').innerHTML = "Error => " + error;
                        }
                    })
                    .catch(error => {
                        console.log("2. Error => ", error);

                        document.getElementById('rslt_qry28').innerHTML = "Error => " + error;
                    })
            }
            else                        // for speciffic surah no.
            {
                theme_query = `PREFIX : <http://www.tafsirtabari.com/ontology#>
                PREFIX W3:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                
                select   ?Hadis_count(count( ?Hadis) as ?Hadis_count)  
                
                where {
                 
                     
                        ?Hadis rdf:type :Hadith.
                    
                        ?Hadis :mentions ?Organization.
                    
                        ?Organization rdf:type :Organization.
                    
                        ?Organization :hasName "` + variable + `".
                    
                    
                    
                }
                `;

                let query = encodeURIComponent(theme_query);
                let url = base_url + query + '&format=application%2Fsparql-results%2Bjson&timeout=0';

                console.log("URL => ", url);

                fetch(url)
                    .then(async response => {
                        console.log(response.status, " | ", response.statusText, " | ", typeof (response));
                        console.log(response);

                        try {
                            const data = await response.text();

                            console.log("Response => ", data);

                            var arr = data.split('\n');
                            console.log("Arr:\n", arr);

                            var temp = "Hadith count for Organization (";
                            temp += variable;
                            temp += ") => ";
                            temp += arr[1];

                            document.getElementById('rslt_qry28').innerHTML += temp;

                        }
                        catch (error) {
                            console.log("1. Error => ", error);

                            document.getElementById('rslt_qry28').innerHTML = "Error => " + error;
                        }
                    })
                    .catch(error => {
                        console.log("2. Error => ", error);

                        document.getElementById('rslt_qry28').innerHTML = "Error => " + error;
                    })
            }
        }
    }

    Query29 = (event) => {
        event.preventDefault();
        // console.log("Query29 event.target[0].value: ", event.target[0].value);

        var variable = event.target[0].value;

        document.getElementById('rslt_qry29').innerHTML = "";
        document.getElementById('graph_qry29').innerHTML = '';

        {
            console.log("Query29 Processing");

            let theme_query;

            if (variable === '0')          // for all
            {
                theme_query = `PREFIX : <http://www.tafsirtabari.com/ontology#>
                PREFIX W3:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                
                select ?Theme_Name  ?Surah_count(count( ?Surah) as ?Surah_count)  
                
                where {
                 
                     
                       ?commentary rdf:type :Commentary.
                    
                    ?commentary :references ?Verse.
                    
                    ?Verse rdf:type :Verse.
                    
                    ?Surah :containsVerse ?Verse.
                    
                        ?Surah rdf:type :Surah.
                    
                    ?commentary :hasTheme ?Theme.
                    ?Theme :hasName ?Theme_Name.
                
                    
                    
                }group by ?Theme_Name
                `;

                let query = encodeURIComponent(theme_query);
                let url = base_url + query + '&format=application%2Fsparql-results%2Bjson&timeout=0';

                console.log("URL => ", url);

                fetch(url)
                    .then(async response => {
                        console.log(response.status, " | ", response.statusText, " | ", typeof (response));
                        console.log(response);

                        try {
                            const data = await response.text();

                            console.log("Response => ", data);

                            var arr = data.split('\n');
                            var arr2 = [];

                            for (let i = 0; i < arr.length; i++) {
                                arr2[i] = arr[i].split(',');
                            }

                            console.log("Arr2:\n", arr2);

                            var disp1 = [];
                            var disp2 = [];

                            for (let i = 1; i < arr.length - 1; i++) {
                                disp1[i] = arr2[i][0];
                                disp2[i] = arr2[i][1];
                            }

                            console.log("Disp1 => \n", disp1);
                            console.log("Disp2 => \n", disp2);

                            var temp = "";

                            temp += "<table className='tableCenter'>";
                            temp += "<thead>";
                            temp += "<tr>";
                            temp += "<th>" + arr2[0][0] + "</th>";
                            temp += "<th>" + arr2[0][1] + "</th>";
                            temp += "</tr>";
                            temp += "</thead>";

                            temp += "<tbody>";
                            for (let i = 1; i < arr.length - 1; i++) {
                                temp += "<tr>";
                                temp += "<td>" + arr2[i][0] + "</td>";
                                temp += "<td> " + arr2[i][1] + " </td>";
                                temp += "</tr>";
                            }
                            temp += "</tbody>";
                            temp += "</table>";

                            document.getElementById('rslt_qry29').innerHTML += temp;

                            const root = ReactDOM.createRoot(document.getElementById('graph_qry29')); 
                            root.render(<BarChart datax={disp1} GraphLabel="Theme Surah count" datay={disp2}/>);
                        }
                        catch (error) {
                            console.log("1. Error => ", error);

                            document.getElementById('rslt_qry29').innerHTML = "Error => " + error;
                        }
                    })
                    .catch(error => {
                        console.log("2. Error => ", error);

                        document.getElementById('rslt_qry29').innerHTML = "Error => " + error;
                    })
            }
            else                        // for speciffic surah no.
            {
                theme_query = `PREFIX : <http://www.tafsirtabari.com/ontology#>
                PREFIX W3:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                
                select   ?Surah_count(count( ?Surah) as ?Surah_count)  
                
                where {
                 
                     
                       ?commentary rdf:type :Commentary.
                    
                    ?commentary :references ?Verse.
                    
                    ?Verse rdf:type :Verse.
                    
                    ?Surah :containsVerse ?Verse.
                    
                        ?Surah rdf:type :Surah.
                    
                    ?commentary :hasTheme ?Theme.
                    ?Theme :hasName "` + variable + `".
                
                    
                    
                }
                `;

                let query = encodeURIComponent(theme_query);
                let url = base_url + query + '&format=application%2Fsparql-results%2Bjson&timeout=0';

                console.log("URL => ", url);

                fetch(url)
                    .then(async response => {
                        console.log(response.status, " | ", response.statusText, " | ", typeof (response));
                        console.log(response);

                        try {
                            const data = await response.text();

                            console.log("Response => ", data);

                            var arr = data.split('\n');
                            console.log("Arr:\n", arr);

                            var temp = "Segment count for Hadith ";
                            temp += variable;
                            temp += " => ";
                            temp += arr[1];

                            document.getElementById('rslt_qry29').innerHTML += temp;

                        }
                        catch (error) {
                            console.log("1. Error => ", error);

                            document.getElementById('rslt_qry29').innerHTML = "Error => " + error;
                        }
                    })
                    .catch(error => {
                        console.log("2. Error => ", error);

                        document.getElementById('rslt_qry29').innerHTML = "Error => " + error;
                    })
            }
        }
    }

    render() {

        var maxSurah = 114;
        var maxChapter = 114;
        var maxHadith = 40000;
        var maxVerse = 286;
        var maxPoetry = 500;

        return (
            <>
                <div className='container'>
                    <h3>This is Aggregated Query Portion</h3>
                    <div className="container my-4 brdr">
                        <button type="button" className="clr-btn btn-sm" onClick={this.clear}>Clear</button>

                        <div className="my-4">
                            <div className="formDiv">
                                <form onSubmit={this.Query1}>
                                    <label className='qryText' htmlFor="qry1">No of Section for each Surah’s</label>
                                    <select className='slct' name="qry1" id="qry1">
                                        {this.createSelectListByNumber(maxSurah)}
                                    </select>
                                    <input type="submit" className="btn btn-sm btn-outline-warning inpt-btn" value="Run Query" />
                                </form>
                            </div>

                            <div className='container qryText'>
                                <div id="rslt_qry1"></div>
                                <div id="graph_qry1"></div>
                            </div>
                        </div>

                        <div className="my-4">
                            <div className="formDiv">
                                <form onSubmit={this.Query2}>
                                    <label className='qryText' htmlFor="qry2">No of Sections in each chapter</label>
                                    <select className='slct' name="qry2" id="qry2">
                                        {this.createSelectListByNumber(maxChapter)}
                                    </select>
                                    <input type="submit" className="btn btn-sm btn-outline-warning inpt-btn" value="Run Query" />
                                </form>
                            </div>

                            <div className='container qryText'>
                                <div id="rslt_qry2"></div>
                                <div id="graph_qry2"></div>
                            </div>
                        </div>

                        <div className="my-4">
                            <div className="formDiv">
                                <form onSubmit={this.Query3}>
                                    <label className='qryText' htmlFor="qry3">No of Verses in each Chapter</label>
                                    <select className='slct' name="qry3" id="qry3">
                                        {this.createSelectListByNumber(maxChapter)}
                                    </select>
                                    <input type="submit" className="btn btn-sm btn-outline-warning inpt-btn" value="Run Query" />
                                </form>
                            </div>

                            <div className='container qryText'>
                                <div id="rslt_qry3"></div>
                                <div id="graph_qry3"></div>
                            </div>
                        </div>

                        <div className="my-4">
                            <div className="formDiv">
                                <form onSubmit={this.Query4}>
                                    <label className='qryText' htmlFor="qry4">No of segments in each hadith</label>
                                    <select className='slct' name="qry4" id="qry4">
                                        {this.createSelectListByNumber(maxHadith)}
                                    </select>
                                    <input type="submit" className="btn btn-sm btn-outline-warning inpt-btn" value="Run Query" />
                                </form>
                            </div>

                            <div className='container qryText'>
                                <div id="rslt_qry4"></div>
                                <div id="graph_qry4"></div>
                            </div>
                        </div>

                        <div className="my-4">
                            <div className="formDiv">
                                <form onSubmit={this.Query5}>
                                    <label className='qryText' htmlFor="qry5">No of Narrators in each Hadith</label>
                                    <select className='slct' name="qry5" id="qry5">
                                        {this.createSelectListByNumber(maxHadith)}
                                    </select>
                                    <input type="submit" className="btn btn-sm btn-outline-warning inpt-btn" value="Run Query" />
                                </form>
                            </div>

                            <div className='container qryText'>
                                <div id="rslt_qry5"></div>
                                <div id="graph_qry5"></div>
                            </div>
                        </div>

                        <div className="my-4">
                            <div className="formDiv">
                                <form onSubmit={this.Query6}>
                                    <label className='qryText' htmlFor="qry6">No of Organizations in each Hadith</label>
                                    <select className='slct' name="qry6" id="qry6">
                                        {this.createSelectListByNumber(maxHadith)}
                                    </select>
                                    <input type="submit" className="btn btn-sm btn-outline-warning inpt-btn" value="Run Query" />
                                </form>
                            </div>

                            <div className='container qryText'>
                                <div id="rslt_qry6"></div>
                                <div id="graph_qry6"></div>
                            </div>
                        </div>

                        <div className="my-4">
                            <div className="formDiv">
                                <form onSubmit={this.Query7}>
                                    <label className='qryText' htmlFor="qry7">No of Verse Fragments in each Verse</label>
                                    <label className='lblText slct-opt-lft1'>Chapter no:</label>
                                    <select className='slct' name="qry7_1" id="qry7_1">
                                        {this.createSelectListByNumber(maxChapter)}
                                    </select>
                                    <label className='lblText slct-opt-lft2'>Verse no:</label>
                                    <select className='slct slct2' name="qry7_2" id="qry7_2">
                                        {this.createSelectListByNumber(maxVerse)}
                                    </select>
                                    <input type="submit" className="btn btn-sm btn-outline-warning inpt-btn" value="Run Query" />
                                </form>
                            </div>

                            <div className='container qryText'>
                                <div id="rslt_qry7"></div>
                            </div>
                        </div>

                        <div className="my-4">
                            <div className="formDiv">
                                <form onSubmit={this.Query8}>
                                    <label className='qryText' htmlFor="qry8">No of Organizations mentioned in each poetry</label>
                                    <select className='slct' name="qry8" id="qry8">
                                        {this.createSelectListByNumber(maxPoetry)}
                                    </select>
                                    <input type="submit" className="btn btn-sm btn-outline-warning inpt-btn" value="Run Query" />
                                </form>
                            </div>

                            <div className='container qryText'>
                                <div id="rslt_qry8"></div>
                                <div id="graph_qry8"></div>
                            </div>
                        </div>

                        <div className="my-4">
                            <div className="formDiv">
                                <form onSubmit={this.Query9}>
                                    <label className='qryText' htmlFor="qry9">No of Segments in each Verse</label>
                                    <label className='lblText slct-opt-lft1'>Chapter no:</label>
                                    <select className='slct' name="qry9_1" id="qry9_1">
                                        {this.createSelectListByNumber(maxChapter)}
                                    </select>
                                    <label className='lblText slct-opt-lft2'>Verse no:</label>
                                    <select className='slct slct2' name="qry9_2" id="qry9_2">
                                        {this.createSelectListByNumber(maxVerse)}
                                    </select>
                                    <input type="submit" className="btn btn-sm btn-outline-warning inpt-btn" value="Run Query" />
                                </form>
                            </div>

                            <div className='container qryText'>
                                <div id="rslt_qry9"></div>
                            </div>
                        </div>

                        <div className="my-4">
                            <div className="formDiv">
                                <form onSubmit={this.Query10}>
                                    <label className='qryText' htmlFor="qry10">No of Segments in each Verse Fragment</label>
                                    <label className='lblText slct-opt-lft1'>Chapter no:</label>
                                    <select className='slct' name="qry10_1" id="qry10_1">
                                        {this.createSelectListByNumber(maxChapter)}
                                    </select>
                                    <label className='lblText  slct-opt-lft2'>Verse no:</label>
                                    <select className='slct slct2' name="qry10_2" id="qry10_2">
                                        {this.createSelectListByNumber(maxVerse)}
                                    </select>
                                    <input type="submit" className="btn btn-sm btn-outline-warning inpt-btn" value="Run Query" />
                                </form>
                            </div>

                            <div className='container qryText'>
                                <div id="rslt_qry10"></div>
                            </div>
                        </div>

                        <div className="my-4">
                            <div className="formDiv">
                                <form onSubmit={this.Query11}>
                                    <label className='qryText' htmlFor="qry11">No of Hadiths in each Theme</label>
                                    <select className='slct' name="qry11" id="qry11">
                                        {this.createSelectThemeName()}
                                    </select>
                                    <input type="submit" className="btn btn-sm btn-outline-warning inpt-btn" value="Run Query" />
                                </form>
                            </div>

                            <div className='container qryText'>
                                <div id="rslt_qry11"></div>
                                <div id="graph_qry11"></div>
                            </div>
                        </div>

                        <div className="my-4">
                            <div className="formDiv">
                                <form onSubmit={this.Query12}>
                                    <label className='qryText' htmlFor="qry12">No of Commentary in each theme</label>
                                    <select className='slct' name="qry12" id="qry12">
                                        {this.createSelectThemeName()}
                                    </select>
                                    <input type="submit" className="btn btn-sm btn-outline-warning inpt-btn" value="Run Query" />
                                </form>
                            </div>

                            <div className='container qryText'>
                                <div id="rslt_qry12"></div>
                                <div id="graph_qry12"></div>
                            </div>
                        </div>

                        <div className="my-4">
                            <div className="formDiv">
                                <form onSubmit={this.Query13}>
                                    <label className='qryText' htmlFor="qry13">No of Hadiths by Root Narrators</label>
                                    <select className='slct' name="qry13" id="qry13">
                                        {this.createSelectRtNarratorsByName()}
                                    </select>
                                    <input type="submit" className="btn btn-sm btn-outline-warning inpt-btn" value="Run Query" />
                                </form>
                            </div>

                            <div className='container qryText'>
                                <div id="rslt_qry13"></div>
                                <div id="graph_qry13"></div>
                            </div>
                        </div>

                        <div className="my-4">
                            <div className="formDiv">
                                <form onSubmit={this.Query14}>
                                    <label className='qryText' htmlFor="qry14">No of Hadiths in each Sub-Theme</label>
                                    <select className='slct' name="qry14" id="qry14">
                                        {this.createSelectSubThemeName()}
                                    </select>
                                    <input type="submit" className="btn btn-sm btn-outline-warning inpt-btn" value="Run Query" />
                                </form>
                            </div>

                            <div className='container qryText'>
                                <div id="rslt_qry14"></div>
                                <div id="graph_qry14"></div>
                            </div>
                        </div>

                        <div className="my-4">
                            <div className="formDiv">
                                <form onSubmit={this.Query15}>
                                    <label className='qryText' htmlFor="qry15">No of Thematic Verse in each Sub theme</label>
                                    <select className='slct' name="qry15" id="qry15">
                                        {this.createSelectSubThemeName()}
                                    </select>
                                    <input type="submit" className="btn btn-sm btn-outline-warning inpt-btn" value="Run Query" />
                                </form>
                            </div>

                            <div className='container qryText'>
                                <div id="rslt_qry15"></div>
                                <div id="graph_qry15"></div>
                            </div>
                        </div>

                        <div className="my-4">
                            <div className="formDiv">
                                <form onSubmit={this.Query16}>
                                    <label className='qryText' htmlFor="qry16">No of Thematic Verse Fragment in each Sub theme</label>
                                    <select className='slct' name="qry16" id="qry16">
                                        {this.createSelectSubThemeName()}
                                    </select>
                                    <input type="submit" className="btn btn-sm btn-outline-warning inpt-btn" value="Run Query" />
                                </form>
                            </div>

                            <div className='container qryText'>
                                <div id="rslt_qry16"></div>
                                <div id="graph_qry16"></div>
                            </div>
                        </div>

                        <div className="my-4">
                            <div className="formDiv">
                                <form onSubmit={this.Query17}>
                                    <label className='qryText' htmlFor="qry17">No of Segments in each Sub theme</label>
                                    <select className='slct' name="qry17" id="qry17">
                                        {this.createSelectSubThemeName()}
                                    </select>
                                    <input type="submit" className="btn btn-sm btn-outline-warning inpt-btn" value="Run Query" />
                                </form>
                            </div>

                            <div className='container qryText'>
                                <div id="rslt_qry17"></div>
                                <div id="graph_qry17"></div>
                            </div>
                        </div>

                        <div className="my-4">
                            <div className="formDiv">
                                <form onSubmit={this.Query18}>
                                    <label className='qryText' htmlFor="qry18">No of Narrator Type in each Sub theme:</label>
                                    <select className='slct' name="qry18" id="qry18">
                                        {this.createSelectSubThemeName()}
                                    </select>
                                    <input type="submit" className="btn btn-sm btn-outline-warning inpt-btn" value="Run Query" />
                                </form>
                            </div>

                            <div className='container qryText'>
                                <div id="rslt_qry18"></div>
                                <div id="graph_qry18"></div>
                            </div>
                        </div>

                        <div className="my-4">
                            <div className="formDiv">
                                <form onSubmit={this.Query19}>
                                    <label className='qryText' htmlFor="qry19">No of Thematic Verse in each Theme</label>
                                    <select className='slct' name="qry19" id="qry19">
                                        {this.createSelectThemeName()}
                                    </select>
                                    <input type="submit" className="btn btn-sm btn-outline-warning inpt-btn" value="Run Query" />
                                </form>
                            </div>

                            <div className='container qryText'>
                                <div id="rslt_qry19"></div>
                                <div id="graph_qry19"></div>
                            </div>
                        </div>

                        <div className="my-4">
                            <div className="formDiv">
                                <form onSubmit={this.Query20}>
                                    <label className='qryText' htmlFor="qry20">No of Thematic Verse Fragments in each Theme</label>
                                    <select className='slct' name="qry20" id="qry20">
                                        {this.createSelectThemeName()}
                                    </select>
                                    <input type="submit" className="btn btn-sm btn-outline-warning inpt-btn" value="Run Query" />
                                </form>
                            </div>

                            <div className='container qryText'>
                                <div id="rslt_qry20"></div>
                                <div id="graph_qry20"></div>
                            </div>
                        </div>

                        <div className="my-4">
                            <div className="formDiv">
                                <form onSubmit={this.Query21}>
                                    <label className='qryText' htmlFor="qry21">No of Segments in each Theme</label>
                                    <select className='slct' name="qry21" id="qry21">
                                        {this.createSelectThemeName()}
                                    </select>
                                    <input type="submit" className="btn btn-sm btn-outline-warning inpt-btn" value="Run Query" />
                                </form>
                            </div>

                            <div className='container qryText'>
                                <div id="rslt_qry21"></div>
                                <div id="graph_qry21"></div>
                            </div>
                        </div>

                        <div className="my-4">
                            <div className="formDiv">
                                <form onSubmit={this.Query22}>
                                    <label className='qryText' htmlFor="qry22">No of Narrator Type in each theme</label>
                                    <select className='slct' name="qry22" id="qry22">
                                        {this.createSelectThemeName()}
                                    </select>
                                    <input type="submit" className="btn btn-sm btn-outline-warning inpt-btn" value="Run Query" />
                                </form>
                            </div>

                            <div className='container qryText'>
                                <div id="rslt_qry22"></div>
                                <div id="graph_qry22"></div>
                            </div>
                        </div>

                        <div className="my-4">
                            <div className="formDiv">
                                <form onSubmit={this.Query23}>
                                    <label className='qryText' htmlFor="qry23">No of Commentary in each Sub theme</label>
                                    <select className='slct' name="qry23" id="qry23">
                                        {this.createSelectSubThemeName()}
                                    </select>
                                    <input type="submit" className="btn btn-sm btn-outline-warning inpt-btn" value="Run Query" />
                                </form>
                            </div>

                            <div className='container qryText'>
                                <div id="rslt_qry23"></div>
                                <div id="graph_qry23"></div>
                            </div>
                        </div>

                        <div className="my-4">
                            <div className="formDiv">
                                <form onSubmit={this.Query24}>
                                    <label className='qryText' htmlFor="qry24">No of Poetry in each Theme</label>
                                    <select className='slct' name="qry24" id="qry24">
                                        {this.createSelectThemeName()}
                                    </select>
                                    <input type="submit" className="btn btn-sm btn-outline-warning inpt-btn" value="Run Query" />
                                </form>
                            </div>

                            <div className='container qryText'>
                                <div id="rslt_qry24"></div>
                                <div id="graph_qry24"></div>
                            </div>
                        </div>

                        <div className="my-4">
                            <div className="formDiv">
                                <form onSubmit={this.Query25}>
                                    <label className='qryText' htmlFor="qry25">No of Hadis by each Narrator</label>
                                    <select className='slct' name="qry25" id="qry25">
                                        {this.createSelectNarratorByName()}
                                    </select>
                                    <input type="submit" className="btn btn-sm btn-outline-warning inpt-btn" value="Run Query" />
                                </form>
                            </div>

                            <div className='container qryText'>
                                <div id="rslt_qry25"></div>
                                <div id="graph_qry25"></div>
                            </div>
                        </div>

                        <div className="my-4">
                            <div className="formDiv">
                                <form onSubmit={this.Query26}>
                                    <label className='qryText' htmlFor="qry26">No of Hadith in each Surah</label>
                                    <select className='slct' name="qry26" id="qry26">
                                        {this.createSelectSurahByName()}
                                    </select>
                                    <input type="submit" className="btn btn-sm btn-outline-warning inpt-btn" value="Run Query" />
                                </form>
                            </div>

                            <div className='container qryText'>
                                <div id="rslt_qry26"></div>
                                <div id="graph_qry26"></div>
                            </div>
                        </div>

                        <div className="my-4">
                            <div className="formDiv">
                                <form onSubmit={this.Query27}>
                                    <label className='qryText' htmlFor="qry27">No of Hadith’s by each Location</label>
                                    <select className='slct' name="qry27" id="qry27">
                                        {this.createSelectLocationByName()}
                                    </select>
                                    <input type="submit" className="btn btn-sm btn-outline-warning inpt-btn" value="Run Query" />
                                </form>
                            </div>

                            <div className='container qryText'>
                                <div id="rslt_qry27"></div>
                                <div id="graph_qry27"></div>
                            </div>
                        </div>

                        <div className="my-4">
                            <div className="formDiv">
                                <form onSubmit={this.Query28}>
                                    <label className='qryText' htmlFor="qry28">No of Hadiths in each Organization</label>
                                    <select className='slct' name="qry28" id="qry28">
                                        {this.createSelectOrganizationByName()}
                                    </select>
                                    <input type="submit" className="btn btn-sm btn-outline-warning inpt-btn" value="Run Query" />
                                </form>
                            </div>

                            <div className='container qryText'>
                                <div id="rslt_qry28"></div>
                                <div id="graph_qry28"></div>
                            </div>
                        </div>

                        <div className="my-4">
                            <div className="formDiv">
                                <form onSubmit={this.Query29}>
                                    <label className='qryText' htmlFor="qry29">No of Surah in each Theme</label>
                                    <select className='slct' name="qry29" id="qry29">
                                        {this.createSelectThemeName()}
                                    </select>
                                    <input type="submit" className="btn btn-sm btn-outline-warning inpt-btn" value="Run Query" />
                                </form>
                            </div>

                            <div className='container qryText'>
                                <div id="rslt_qry29"></div>
                                <div id="graph_qry29"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default AggregatedQuery