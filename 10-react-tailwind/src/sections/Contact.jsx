import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", msg: "" });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, msg } = form;
    if (!name || !email || !msg) return alert("Completa todos los campos");
    alert("Mensaje enviado");
    setForm({ name: "", email: "", msg: "" });
  };

  return (
    <section id="contacto" className="max-w-3xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold mb-4">Contacto</h2>
      <form onSubmit={onSubmit} className="grid gap-4">
        <Input
          label="Nombre"
          name="name"
          value={form.name}
          onChange={onChange}
        />
        <Input
          label="Correo"
          name="email"
          type="email"
          value={form.email}
          onChange={onChange}
        />
        <Input
          label="Mensaje"
          as="textarea"
          rows={4}
          name="msg"
          value={form.msg}
          onChange={onChange}
        />
        <div>
          <Button className="bg-pink-600 text-white hover:bg-pink-500">
            Enviar
          </Button>
        </div>
      </form>
    </section>
  );
}
