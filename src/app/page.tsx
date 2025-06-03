"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Hammer, Wrench, Drill, WrenchIcon as Screwdriver, Phone, Mail, MapPin, Clock, Star, ShoppingCart, Search, Facebook, Instagram, Twitter } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function FerreteriaPrincipal() {
  const productos = [
    {
      id: 1,
      nombre: "Taladro Inalámbrico",
      precio: "$2,499",
      imagen: "/taladro.jpg?height=200&width=200",
      categoria: "Herramientas Eléctricas",
      rating: 4.8,
      descuento: "15% OFF",
    },
    {
      id: 2,
      nombre: "Martillo de Acero",
      precio: "$299",
      imagen: "/martillo.jpg?height=200&width=200",
      categoria: "Herramientas Manuales",
      rating: 4.9,
      descuento: null,
    },
    {
      id: 3,
      nombre: "Juego de Destornilladores",
      precio: "$599",
      imagen: "/destornilla.jpg?height=200&width=200",
      categoria: "Herramientas Manuales",
      rating: 4.7,
      descuento: "20% OFF",
    },
    {
      id: 4,
      nombre: "Sierra Circular",
      precio: "$3,299",
      imagen: "/sierra.jpg?height=200&width=200",
      categoria: "Herramientas Eléctricas",
      rating: 4.6,
      descuento: null,
    },
    {
      id: 5,
      nombre: "Llave Inglesa Set",
      precio: "$899",
      imagen: "/llave.jpg?height=200&width=200",
      categoria: "Herramientas Manuales",
      rating: 4.8,
      descuento: "10% OFF",
    },
    {
      id: 6,
      nombre: "Atornillador Eléctrico",
      precio: "$1,799",
      imagen: "/atornillador.jpg?height=200&width=200",
      categoria: "Herramientas Eléctricas",
      rating: 4.5,
      descuento: null,
    },
  ]

  const categorias = [
    { nombre: "Herramientas Eléctricas", icono: Drill, color: "bg-blue-500" },
    { nombre: "Herramientas Manuales", icono: Hammer, color: "bg-green-500" },
    { nombre: "Tornillería", icono: Screwdriver, color: "bg-purple-500" },
    { nombre: "Plomería", icono: Wrench, color: "bg-orange-500" },
  ]

  return (
    
    <div className="min-h-screen bg-gray-50">
    
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4">
          {/* Top bar */}
          <div className="flex justify-between items-center py-2 text-sm text-gray-600 border-b">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-1" />
                <span>(504) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-1" />
                <span>info@ferreteria.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>Lun-Sáb: 8:00-18:00</span>
            </div>
          </div>

          {/* Main header */}
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Hammer className="h-8 w-8 text-white" />
              </div>
              <div>
               <h1 className="text-2xl font-bold text-gray-900">Ferreteía</h1>
                <p className="text-sm text-gray-600">Tu ferretería de confianza</p>
              </div>
            </div>

            {/* Search bar */}
            <div className="flex-1 max-w-xl mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input placeholder="Buscar herramientas, materiales..." className="pl-10 pr-4 py-2 w-full" />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Carrito (0)
              </Button>
              <Button size="sm">Contactar</Button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="py-3">
            <div className="flex items-center space-x-8">
              <Link href="#" className="text-gray-700 hover:text-blue-600 font-medium">
                Inicio
              </Link>
              <Link href="#productos" className="text-gray-700 hover:text-blue-600 font-medium">
                Productos
              </Link>
              <Link href="#categorias" className="text-gray-700 hover:text-blue-600 font-medium">
                Categorías
              </Link>
              <Link href="#servicios" className="text-gray-700 hover:text-blue-600 font-medium">
                Servicios
              </Link>
              <Link href="#contacto" className="text-gray-700 hover:text-blue-600 font-medium">
                Contacto
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6">Las mejores herramientas para tus proyectos</h2>
              <p className="text-xl mb-8 text-blue-100">
                Encuentra todo lo que necesitas para construcción, reparación y mantenimiento. Calidad garantizada y los
                mejores precios del mercado.
              </p>
              <div className="flex space-x-4">
                <Link href="#productos">
        <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
           Ver Catálogo
          </Button>
        </Link>
                
                <Link href="#contacto">
  <Button
       size="lg"
         variant="outline"
           className="border-white text-blue-600 hover:bg-white hover:text-blue-600"
  >
          Contactar Ahora
  </Button>
</Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/clientes.jpg?height=400&width=500"
                alt="Herramientas profesionales"
                width={500}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categorías */}
      <section id="categorias" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Nuestras Categorías</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explora nuestra amplia gama de productos organizados por categorías para encontrar exactamente lo que
              necesitas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categorias.map((categoria, index) => {
              const IconComponent = categoria.icono
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div
                      className={`${categoria.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}
                    >
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">{categoria.nombre}</h4>
                    <p className="text-sm text-gray-600">Ver productos</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Productos Destacados */}
      <section id="productos" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Productos Destacados</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Descubre nuestros productos más populares con la mejor calidad y precios competitivos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productos.map((producto) => (
              <Card key={producto.id} className="hover:shadow-lg transition-shadow">
                <div className="relative">
                  {producto.descuento && (
                    <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600">{producto.descuento}</Badge>
                  )}
                  <Image
                    src={producto.imagen || "/placeholder.svg"}
                    alt={producto.nombre}
                    width={200}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </div>
                <CardContent className="p-4">
                  <Badge variant="secondary" className="mb-2 text-xs">
                    {producto.categoria}
                  </Badge>
                  <h4 className="font-semibold text-gray-900 mb-2">{producto.nombre}</h4>
                  <div className="flex items-center mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(producto.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">({producto.rating})</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-600">{producto.precio}</span>
                    <Button size="sm">
                      <ShoppingCart className="h-4 w-4 mr-1" />
                      Agregar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              Ver Todos los Productos
            </Button>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Nuestros Servicios</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Además de nuestros productos, ofrecemos servicios especializados para completar tus proyectos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Reparaciones</h4>
                <p className="text-gray-600 mb-4">
                  Servicio técnico especializado para reparación de herramientas eléctricas y equipos.
                </p>
                <Button variant="outline" size="sm">
                  Más información
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Drill className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Alquiler de Equipos</h4>
                <p className="text-gray-600 mb-4">
                  Renta de maquinaria pesada y herramientas especializadas por días o semanas.
                </p>
                <Button variant="outline" size="sm">
                  Más información
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Hammer className="h-8 w-8 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Asesoría Técnica</h4>
                <p className="text-gray-600 mb-4">
                  Consultoría especializada para la selección de herramientas y materiales.
                </p>
                <Button variant="outline" size="sm">
                  Más información
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold mb-6">Contáctanos</h3>
              <p className="text-gray-300 mb-8">
                Estamos aquí para ayudarte con todas tus necesidades de herramientas y materiales. No dudes en
                contactarnos.
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-blue-400 mr-3" />
                  <span>Barrio, La Paz, calle 2</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-blue-400 mr-3" />
                  <span>(504) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-400 mr-3" />
                  <span>info@ferreteria.com</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-blue-400 mr-3" />
                  <span>Lunes a Sábado: 8:00 AM - 6:00 PM</span>
                </div>
              </div>

              <div className="flex space-x-4 mt-8">
                <Button size="sm" variant="outline" className="border-gray-600 bg-gray-800 hover:bg-gray-800">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="outline" className="border-gray-600 bg-gray-800 hover:bg-gray-800">
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="outline" className="border-gray-600 bg-gray-800 hover:bg-gray-800">
                  <Twitter className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Envíanos un mensaje</CardTitle>
                <CardDescription className="text-gray-400">Te responderemos lo antes posible</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input placeholder="Nombre" className="bg-gray-700 border-gray-600 text-white" />
                  <Input placeholder="Email" className="bg-gray-700 border-gray-600 text-white" />
                </div>
                <Input placeholder="Teléfono" className="bg-gray-700 border-gray-600 text-white" />
                <textarea
                  placeholder="Mensaje"
                  rows={4}
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Enviar Mensaje</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Hammer className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold text-white">Ferretería</span>
              </div>
              <p className="text-sm">Tu ferretería de confianza con más de 20 años de experiencia en el mercado.</p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Productos</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:text-white">
                    Herramientas Eléctricas
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Herramientas Manuales
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Tornillería
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Plomería
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Servicios</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:text-white">
                    Reparaciones
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Alquiler
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Asesoría
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Delivery
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:text-white">
                    Sobre Nosotros
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Contacto
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Términos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Privacidad
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2024 Ferretería. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}