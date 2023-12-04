"use client";
import React, { useState, useEffect, useRef } from "react";
import { LoaderUrso } from "./loaderUrso";
import { Coffee } from "./coffe";
import { useSession } from "next-auth/react";

const Temperature = () => {
  const [temperature, setTemperature] = useState<string>("");
  const wsRef = useRef<WebSocket | null>(null);
  const [temperatureNumber, setTemperatureNumber] = useState<number>(0);
  const { data: session, status } = useSession();

  useEffect(() => {
    // Inicializa o WebSocket usando a API nativa do navegador
    wsRef.current = new WebSocket("wss://aad1-177-174-221-3.ngrok-free.app/");

    // const

    wsRef.current.onmessage = (event) => {
      setTemperature(event.data);
      console.log(event.data);
      
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

  console.log(typeof temperatureNumber);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "5rem",
        justifyContent: "center",
      }}
    >
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h2>{temperature}</h2>
          <span>
            {temperatureNumber >= 30
              ? "O café está pronto! ☕️"
              : "O café não está pronto 😔"}
          </span>
        </div>
      </div>
      {temperatureNumber >= 30 && <Coffee />}
      {/* <LoaderUrso /> */}
    </div>
  );
};

export default Temperature;
