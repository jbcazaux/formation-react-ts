import React from "react";
import "./App.css";

type Props = { name: String };

const Hello = ({ name }: Props) => <div>Hello {name}</div>;

export default Hello;
