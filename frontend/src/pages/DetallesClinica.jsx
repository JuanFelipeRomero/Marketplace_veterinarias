import {
  Box,
  Flex,
  Text,
  Image,
  Badge,
  Button,
  SimpleGrid
} from '@chakra-ui/react'
import MastercardIcon from './mastercard-logo.svg'
import VisaIcon from './visa-logo.png'
import DaviplataIcon from './daviplata.svg'

export default function DetallesClinica() {
  return (
    <Box p="6">
      {/* Cabecera con nombre y galería de imágenes */}
      <Text fontSize="2xl" fontWeight="bold" mb="4">
        VetPlanet
      </Text>
      <SimpleGrid columns={[1, 2, 3]} spacing="4" mb="8">
        <Image
          src="https://images.unsplash.com/photo-1630438994394-3deff7a591bf?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Imagen 1"
          borderRadius="md"
        />
        <Image
          src="https://images.pexels.com/photos/19145897/pexels-photo-19145897/free-photo-of-mujer-trabajando-animal-perro.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Imagen 2"
          borderRadius="md"
        />
        <Image
          src="https://images.pexels.com/photos/19145885/pexels-photo-19145885/free-photo-of-mujer-trabajando-perro-mascota.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Imagen 3"
          borderRadius="md"
        />
      </SimpleGrid>

      {/* Información de la clínica */}
      <Box p="6" border="1px" borderColor="gray.200" rounded="md" mb="8">
        <Text fontSize="lg" fontWeight="bold" mb="2">
          Información de la clínica
        </Text>
        <Text fontSize="sm" color="gray.600" mb="4">
          Descripción...
        </Text>
        <Text fontSize="sm" color="gray.700">
          <strong>Horarios:</strong> 9:00 a.m. - 6:00 p.m.
        </Text>
        <Text fontSize="sm" color="gray.700">
          <strong>Dirección:</strong> Cra 1A #34 - 47c
        </Text>

        {/* Métodos de pago */}
        <Text fontSize="sm" fontWeight="bold" mt="4" mb="2">
          Métodos de pago
        </Text>
        <Flex gap="2" alignItems="center">
          <Image src={MastercardIcon} alt="Mastercard" boxSize="30px" />
          <Image src={VisaIcon} alt="Visa" boxSize="30px" />
          <Image src={DaviplataIcon} alt="Daviplata" boxSize="30px" />
        </Flex>

        {/* Servicio 24Hrs */}
        <Text fontSize="lg" color="green.500" fontWeight="bold" mt="4">
          Servicio 24Hrs
        </Text>
      </Box>

      {/* Servicios */}
      <Text fontSize="xl" fontWeight="bold" mb="4">
        Servicios
      </Text>
      <SimpleGrid columns={[1, 2, 3]} spacing="4">
        {[
          { nombre: 'Control médico', categoria: 'MEDICINA GENERAL' },
          { nombre: 'Vacunación', categoria: 'INYECTOLOGÍA' },
          { nombre: 'Consulta veterinaria', categoria: 'MEDICINA GENERAL' },
          { nombre: 'Toma de muestras', categoria: 'LABORATORIO' },
          { nombre: 'Ortodoncia', categoria: 'CUIDADO BUCAL' },
          { nombre: 'Ortopedia', categoria: 'FISIOTERAPIA' }
        ].map((servicio, index) => (
          <Box
            key={index}
            p="4"
            border="1px"
            borderColor="gray.200"
            rounded="md"
          >
            <Text fontWeight="bold">{servicio.nombre}</Text>
            <Badge colorScheme="purple" mt="1" mb="3">
              {servicio.categoria}
            </Badge>
            <Flex gap="2">
              <Button colorScheme="gray" variant="outline" size="sm">
                Ver detalles
              </Button>
              <Button
                className="bg-green-600 text-white py-2 px-4 rounded-md"
                colorScheme="green"
                size="sm"
              >
                Agendar
              </Button>
            </Flex>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  )
}
