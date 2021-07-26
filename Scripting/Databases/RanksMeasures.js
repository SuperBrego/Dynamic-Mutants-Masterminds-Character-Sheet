
/* ******************************* Graduações e Medidas *********************************** */
//  0    1    2    3      4
// Grad - Massa - Tempo - Distância - Volume
const _RanksMeasuresTable = 
[ 
  [-5, "1 kg", "1/8 de segundo", "25 cm", "1 litro"],
  [-4, "2 kg", "1/4 de segundo", "50 cm", "2 litros"],
  [-3, "4 kg", "1/2 de segundo", "1 m", "4 litros"],
  [-2, "8 kg", "1 segundo", "2 m", "8 litros"],
  [-1, "15 kg", "3 segundos", "4 m", "15 litros"],
  [0, "30 kg", "6 segundos", "8 m", "30 litros"],
  [1, "60 kg", "12 segundos", "15 m", "60 litros"],
  [2, "120 kg", "30 segundos", "30 m", "120 litros"],
  [3, "250 kg", "1 minuto", "60 m", "250 litros"],
  [4, "500 kg", "2 minutos", "120 m", "500 litros"],
  [5, "1 tonelada", "4 minutos", " 250 m", "500 litros"],
  [6, "2 toneladas", "8 minutos", "500 m", "1 m³"],
  [7, "4 toneladas", "15 minutos", "1 km", "2 m³"],
  [8, "8 toneladas", "30 minutos", "2 km", "8 m³"],
  [9, "15 toneladas", "1 hora", "4 km", "15 m³"],
  [10, "30 toneladas", "2 horas", "8 km", "30 m³"],
  [11, "60 toneladas", "4 horas", "15 km", "60 m³"],
  [12, "120 toneladas", "8 horas", "30 km", "120 m³"],
  [13, "250 toneladas", "15 horas", "60 km", "250 m³"],
  [14, "500 toneladas", "1 dia", "120 km", "500 m³"],
  [15, "1.000 t", "2 dias", "250 km", "1.000 m³"],
  [16, "2.000 t", "4 dias", "500 km", "2.000 m³"],
  [17, "4.000 t", "1 semana", "1.000 km", "4.000 m³"],
  [18, "8.000 t", "2 semanas", "2.000 km", "8.000 m³"],
  [19, "15.000 t", "1 mês", "4.000 km", "15.000 m³"], 
  [20, "30.000 t", "2 meses", "8.000 km", "30.000 m³"],
  [21, "60.000 t", "4 meses", "15.000 km", "60.000 m³"],
  [22, "120.000 t", "8 meses", "30.000 km", "120.000 m³"],
  [23, "250.000 t", "1 ano e meio", "60.000 km", "250.000 m³"],
  [24, "500.00 t", "3 anos", "120.000 km", "500.000 m³"],
  [25, "1 milhão t", "6 anos", "250.000 km", "1 milhão m³"],
  [26, "2 milhões t", "12 anos", "500.000 km", "2 milhões m³"],
  [27, "4 milhões t", "25 anos", "1 milhão km", "4 milhões m³"],
  [28, "8 milhões t", "50 anos", "2 milhões km", "8 milhões m³"],
  [29, "15 milhões t", "1 século", "4 milhões km", "15 milhões m³"],
  [30, "30 milhões t", "2 séculos", "8 milhões km", "30 milhões m³"]
];