import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
// import * as Zoom from "chartjs-plugin-zoom";

const BarChart = (props) => {

    const getRandomColors = (numOfBars) => {
        const letters = "0123456789ABCDEF".split("");
        let colors = [];

        for (let i = 0; i < numOfBars; i++) {
            let color = "#";

            for (let j = 0; j < 6; j++) {
                color += letters[Math.floor(Math.random() * 16)];                
            }

            colors.push(color);
        }

        return colors;
    }

    const data = {
        labels: props.datax,
        datasets: [
            {
                label: props.GraphLabel,
                backgroundColor: "rgb(255, 99, 132)",
                borderColor: "rgb(255, 99, 132)",
                // backgroundColor: getRandomColors((props.datax).length),
                data: props.datay,
            },
        ],
    };

    const options = {
        indexAxis: 'x',
        elements: {
            bar: {
                borderWidth: 0,
            },
        },
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: props.title,
          },
        },
        scales: {
            yAxes: [
                {
                    ticks: {
                        autoSkip: true,
                        maxTicksLimit: 5,
                        beginAtZero: true,
                    },
                    gridLines: {
                        display: false,
                    },
                },
            ],
            xAxes: [
                {
                    gridLines: {
                        display: false,
                    },
                },
            ],
        },
        pan: {
            enabled: true,
            mode: "xy",
            speed: 10,
        },
        zoom: {
            enabled: true,
            drag: false,
            mode: "xy",
            rangeMin: {
                x: 0,
                y: 0,
            },
            rangeMax: {
                x: 10,
                y: 100,
            },
        },
    }

    return (
        <>
            <div>
                <Bar data={data} options={options} />
            </div>
        </>
    );
};

export default BarChart;