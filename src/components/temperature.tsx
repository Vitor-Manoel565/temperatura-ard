"use client";
import React, { useState, useEffect, useRef } from "react";
import { LoaderUrso } from "./loaderUrso";
import { Coffee } from "./coffe";
import { useSession } from "next-auth/react";

const Temperature = () => {
  const [temperature, setTemperature] = useState<string>("");
  const wsRef = useRef<WebSocket | null>(null);
  const [temperatureNumber, setTemperatureNumber] = useState<number>(0);
  const {data: session, status} = useSession();

  useEffect(() => {
    // Inicializa o WebSocket usando a API nativa do navegador
    wsRef.current = new WebSocket("ws://localhost:8080");

    // const

    wsRef.current.onmessage = (event) => {
      setTemperature(event.data);
      const partes = event.data.split(":");
      const numeroComoString = partes[1].trim().split(" ")[0];
      setTemperatureNumber(parseFloat(numeroComoString));
    };

    wsRef.current.onerror = (error) => {
      console.error("WebSocket Error:", error);
    };

    wsRef.current.onclose = () => {
      console.log("WebSocket Disconnected");
    };

    // Função de limpeza para desconectar o WebSocket
    return () => {
      wsRef.current?.close();
    };
  }, []);

  return (
    <div>
      <h1>Temperature</h1>
      <h2>{temperature}</h2>
      <h2>{temperatureNumber}</h2>
      <LoaderUrso />
      <Coffee />
    </div>
  );
};

export default Temperature;
