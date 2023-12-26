import React from "react";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    RadialLinearScale,
    ArcElement,
    Filler,
} from "chart.js";
import { Line, Pie } from "react-chartjs-2";

import moment from "moment/moment";

ChartJS.register(
    CategoryScale,
    RadialLinearScale,
    ArcElement,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export default function ChartPembiayaanKonsumen() {
    const data = {
        labels: ["KPR", "Case Bertahap", "Case Keras"],
        datasets: [
            {
                label: "# of Votes",
                data: (() => {
                    const data = [];
                    for (let i = 0; i < 3; i++) {
                        data.push(Math.floor(Math.random() * 100));
                    }
                    return data;
                })(),
                backgroundColor: [
                    "rgba(255, 99, 132, 0.9)",
                    "rgba(54, 162, 235, 0.9)",
                    "rgba(255, 206, 86, 0.9)",
                ],
                borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                ],
                borderWidth: 1,
            },
        ],
    };
    const option = {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            legend: {
                position: "top",
                // buatkan jarak antara label dengan chart
                padding: 20,
                align: "center",
                labels: {
                    font: {
                        size: 15,
                    },
                },
            },
        },
    };
    return <Pie data={data} options={option} />;
}
