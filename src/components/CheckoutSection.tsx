'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import emailjs from '@emailjs/browser'

const CheckoutSection = () => {
    const router = useRouter();

    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        whatsapp: '',
        cpf: ''
    })

    const [errors, setErrors] = useState({
        nome: '',
        email: '',
        whatsapp: '',
        cpf: ''
    })

    const validate = () => {
        const newErrors = {
            nome: formData.nome.trim() === '' ? 'Por favor, digite seu nome completo.' : '',
            email: /^\S+@\S+\.\S+$/.test(formData.email) ? '' : 'Digite um e-mail válido.',
            whatsapp: /^\d{10,}$/.test(formData.whatsapp.replace(/\D/g, '')) ? '' : 'Informe um número válido com DDD.',
            cpf: /^\d{11}$/.test(formData.cpf.replace(/\D/g, '')) ? '' : 'Digite um CPF válido com 11 números.'
        }

        setErrors(newErrors)
        return Object.values(newErrors).every(error => error === '')
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!validate()) return

        try {
            const templateParams = {
                nome: formData.nome,
                email: formData.email,
                whatsapp: formData.whatsapp,
                cpf: formData.cpf
            }

            await emailjs.send(
                'service_zat0rtj',
                'template_prmxr81',
                templateParams,
                'hJrQXjzu6bgBnyM8x'
            )

            router.push('/obrigado-page')
        } catch (error) {
            console.error('Erro ao enviar email:', error);
            alert('Erro ao enviar e-mail. Tente novamente.');
        }
    }

    return (
        <section className="bg-white text-black min-h-screen px-4 py-8 relative">
            {/* Seta de Voltar */}
            <button
                onClick={() => router.back()}
                className="absolute top-4 left-4 flex items-center bg-black text-white p-2 rounded-lg hover:text-gray-600 cursor-pointer"
            >
                Voltar
            </button>

            <div className="max-w-6xl mx-auto">
                <h2 className="text-center font-bold text-xl mb-4">Oferta Termina Em</h2>

                {/* Contador falso */}
                <div className="flex justify-center gap-4 mb-8 text-center">
                    <div>
                        <div className="text-3xl font-bold">00</div>
                        <div className="text-xs text-gray-600">Horas</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold">00</div>
                        <div className="text-xs text-gray-600">Minutos</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold">00</div>
                        <div className="text-xs text-gray-600">Segundos</div>
                    </div>
                </div>

                {/* Container principal */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Formulário */}
                    <div className="border p-6 rounded-md shadow-md bg-gray-100">
                        <h3 className="font-bold mb-2">1. Pagamento Seguro</h3>
                        <p className="text-sm mb-4">
                            Usaremos seus dados para: Identificar seu perfil, histórico de compras,
                            enviar notificações necessárias.
                        </p>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <input
                                name='nome'
                                value={formData.nome}
                                onChange={handleChange}
                                type="text"
                                placeholder="Nome completo*"
                                className="p-2 border rounded"
                            />
                            {errors.nome && <p className="text-red-500 text-sm mt-1">{errors.nome}</p>}

                            <input
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="E-mail*"
                                className="p-2 border rounded"
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}

                            <input
                                name="whatsapp"
                                value={formData.whatsapp}
                                onChange={handleChange}
                                placeholder="Celular/WhatsApp (com DDD)*"
                                className="p-2 border rounded w-full"
                            />
                            {errors.whatsapp && <p className="text-red-500 text-sm mt-1">{errors.whatsapp}</p>}

                            <div>
                                <input
                                    name="cpf"
                                    value={formData.cpf}
                                    onChange={handleChange}
                                    placeholder="CPF*"
                                    className="p-2 border rounded w-full"
                                />
                                {errors.cpf && <p className="text-red-500 text-sm mt-1">{errors.cpf}</p>}
                            </div>

                            <button type="submit" className="cursor-pointer bg-black text-white py-2 rounded hover:bg-gray-800">
                                Continuar
                            </button>
                        </form>
                    </div>

                    {/* Resumo do Produto */}
                    <div className="border p-6 rounded-md shadow-md bg-gray-50">
                        <h3 className="font-bold mb-2">RESUMO</h3>
                        <p className="text-sm mb-4">Produto: Programa de 10 Semanas Sistema Unfair Advantage</p>
                        <p className="text-green-600 font-semibold text-lg mb-4">TOTAL: R$ 297,00</p>
                        <Image
                            src="/assets/capa-curso.jpeg"
                            alt="Produto"
                            width={300}
                            height={400}
                            className="rounded-md"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CheckoutSection;
