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
const label = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Mei",
    "Jun",
    "Jul",
    "Agu",
    "Sep",
    "Okt",
    "Nov",
    "Des",
];

export default function ChartPemesananProperty() {
    const data = {
        labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "Mei",
            "Jun",
            "Jul",
            "Agu",
            "Sep",
            "Okt",
            "Nov",
            "Des",
        ],
        datasets: [
            {
                label: "Pemesanan Property",
                data: (() => {
                    const data = [];
                    for (let i = 0; i < label.length; i++) {
                        data.push(Math.floor(Math.random() * 100));
                    }
                    return data;
                })(),
                fill: true,
                backgroundColor: "rgb(1 64 105 / 30%)",
                borderColor: "#014069",
            },
        ],
    };

    const option = {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            legend: {
                padding: 20,
                align: "center",
                labels: {
                    font: {
                        size: 20,
                    },
                },
            },
        },
    };

    return <Line data={data} options={option} />;
}
