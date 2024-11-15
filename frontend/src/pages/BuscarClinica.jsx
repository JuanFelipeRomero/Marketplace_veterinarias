import { Box, Flex, Text, Image, Badge, Button } from '@chakra-ui/react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'
import VeterinariaImage from './veterinaria_image.jpg'
import { useNavigate } from 'react-router-dom'

const containerStyle = {
  width: '100%',
  height: '400px'
}

const center = {
  lat: 33.5186,
  lng: -86.8104
}

export default function BuscarClinica() {
  const navigate = useNavigate()
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyC8YAu71LLUy6GUqpOhrnzg2HhrDL2bcEc'
  })

  return (
    <Box p="4">
      <Text fontSize="2xl" fontWeight="bold" mb="4" color="gray.800">
        Veterinarias cercanas
      </Text>

      {/* Mapa */}
      <Box
        border="1px"
        borderColor="gray.200"
        rounded="md"
        overflow="hidden"
        mb="4"
      >
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={12}
          ></GoogleMap>
        ) : (
          <Text color="gray.800">Cargando mapa...</Text>
        )}
      </Box>

      {/* Filtros */}
      <Flex gap="4" mb="6">
        <Button variant="outline" color="gray.800" borderColor="gray.300">
          Localidad
        </Button>
        <Button variant="outline" color="gray.800" borderColor="gray.300">
          Especialidades
        </Button>
        <Button variant="outline" color="gray.800" borderColor="gray.300">
          Calificación
        </Button>
      </Flex>

      {/* Lista de Veterinarias */}
      <Box
        border="1px"
        borderColor="gray.200"
        rounded="md"
        overflow="hidden"
        p="4"
        mb="4"
      >
        <Flex>
          <Image
            src={VeterinariaImage}
            alt="Veterinaria VetPlanet"
            boxSize="150px"
            objectFit="cover"
            borderRadius="md"
            mr="4"
          />
          <Box flex="1">
            <Text fontSize="lg" fontWeight="bold" color="gray.800">
              Veterinaria VetPlanet
            </Text>
            {/* Calificación con texto en lugar de estrellas */}
            <Text fontSize="sm" color="gray.700">
              Calificación: 4/5
            </Text>
            <Text fontSize="sm" color="gray.700">
              <strong>Horario:</strong> 9:00 a.m. - 6:00 p.m.
            </Text>
            <Text fontSize="sm" color="gray.700">
              <strong>Dirección:</strong> Cra. 11a #12 - 34c
            </Text>
            <Badge colorScheme="purple" mt="2">
              URGENCIAS
            </Badge>
          </Box>
          <Button
            variant="outline"
            colorScheme="blue"
            alignSelf="center"
            ml="4"
            className="bg-gray-200 text-black py-2 px-4 rounded-md"
            onClick={() => navigate('/detalles-clinica')}
          >
            Ver detalles
          </Button>
        </Flex>
      </Box>
    </Box>
  )
}
