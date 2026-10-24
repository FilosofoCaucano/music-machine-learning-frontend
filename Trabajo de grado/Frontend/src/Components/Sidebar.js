import React, { useState } from 'react';

// Componente reutilizable para una sección expandible
const ExpandableSection = ({ title, content, isExpanded, toggleSection }) => {
    return (
        <>
            <button
                className="andean-button"
                onClick={toggleSection}
                aria-expanded={isExpanded}
                aria-controls={`${title.toLowerCase()}-content`}
            >
                {title}
            </button>
            {isExpanded && (
                <div id={`${title.toLowerCase()}-content`} className="expanded-section">
                    {typeof content === 'string' ? <p>{content}</p> : content}
                </div>
            )}
        </>
    );
};

const Sidebar = ({ onFilterChange, onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [expandedSection, setExpandedSection] = useState(null);

    // Función para alternar la expansión de una sección
    const toggleSection = (section) => {
        setExpandedSection(expandedSection === section ? null : section);
    };

    return (
        <div className="sidebar">
            {/* Sección de búsqueda */}
            <div className="search-section">
                <input
                    type="text"
                    placeholder="Buscar instrumento..."
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    aria-label="Buscar instrumento"
                />
                <button
                    className="andean-button"
                    onClick={() => onSearch(searchQuery)}
                    aria-label="Buscar"
                >
                    Buscar
                </button>
            </div>

            {/* Sección de filtros */}
            <div className="filters-section">
                <h3>Filtrar por tipo:</h3>
                <select
                    onChange={(e) => onFilterChange(e.target.value)}
                    aria-label="Filtrar por tipo de instrumento"
                >
                    <option value="all">Todos</option>
                    <option value="viento">Viento</option>
                    <option value="cuerda">Cuerda</option>
                    <option value="percusion">Percusión</option>
                </select>
            </div>

            {/* Sección de técnicas de Machine Learning */}
            <div className="ml-techniques-section">
                <h3>Técnicas de Machine Learning</h3>

                {/* Clasificación */}
                <ExpandableSection
                    title="Clasificación"
                    content={
                        <>
                            <p><strong>Clasificación:</strong> Es una tarea supervisada donde un modelo aprende a categorizar un instrumento musical basándose en características extraídas del audio.</p>
                            <ul>
                                <li>Se procesa el sonido mediante técnicas como MFCCs (Mel Frequency Cepstral Coefficients), espectrogramas o armónicos.</li>
                                <li>El modelo es entrenado con datos etiquetados (ejemplo: flauta, violín, batería).</li>
                                <li>Algunos algoritmos usados incluyen Redes Neuronales Convolucionales (CNN), Máquinas de Vectores de Soporte (SVM) y Random Forest.</li>
                                <li>El resultado final es una categoría asignada automáticamente al instrumento detectado.</li>
                            </ul>
                            <p><strong>Aplicaciones:</strong> Organización automática de bibliotecas musicales, análisis acústico y sistemas de recomendación musical.</p>
                        </>
                    }
                    isExpanded={expandedSection === "clasificacion"}
                    toggleSection={() => toggleSection("clasificacion")}
                />

                {/* Identificación */}
                <ExpandableSection
                    title="Identificación"
                    content={
                        <>
                            <p><strong>Identificación:</strong> Consiste en reconocer un instrumento específico dentro de una grabación compleja o mezcla musical.</p>
                            <ul>
                                <li>Se analiza la señal de audio en tiempo real o por segmentos cortos.</li>
                                <li>Se comparan las características del sonido con modelos previamente entrenados de instrumentos específicos.</li>
                                <li>Se utiliza técnicas como Dynamic Time Warping (DTW) para medir similitud entre señales no sincronizadas.</li>
                                <li>Los modelos pueden ser entrenados con muestras limpias de instrumentos tradicionales como quena, charango o bombo.</li>
                            </ul>
                            <p><strong>Usos prácticos:</strong> Transcripción automática de partituras, análisis etnomusicológico y asistentes inteligentes para músicos.</p>
                        </>
                    }
                    isExpanded={expandedSection === "identificacion"}
                    toggleSection={() => toggleSection("identificacion")}
                />
            </div>

            {/* Explicación de modelos de Machine Learning */}
            <div className="ml-explanation">
                <h3>Modelos de Machine Learning</h3>

                {/* CNN */}
                <ExpandableSection
                    title="Redes Neuronales Convolucionales (CNN)"
                    content={
                        <>
                            <p><strong>CNN - Introducción:</strong> Son redes neuronales diseñadas para capturar patrones espaciales y temporales en datos estructurados como imágenes o espectrogramas.</p>
                            <ol>
                                <li><strong>Conversión del audio:</strong> El audio se transforma en un espectrograma (representación visual del espectro de frecuencias).</li>
                                <li><strong>Capas convolucionales:</strong> Detectan patrones locales como tonos puros, armónicos o timbres característicos.</li>
                                <li><strong>Pooling:</strong> Reduce la dimensionalidad y mantiene las características más relevantes.</li>
                                <li><strong>Capas densas:</strong> Realizan la clasificación final basada en las características extraídas.</li>
                            </ol>
                            <p><strong>Ventajas:</strong></p>
                            <ul>
                                <li>Aprenden características directamente del audio sin intervención manual.</li>
                                <li>Muy efectivas en grandes conjuntos de datos y altas precisiones.</li>
                                <li>Ampliamente usadas en visión artificial y reconocimiento de audio.</li>
                            </ul>
                        </>
                    }
                    isExpanded={expandedSection === "cnn"}
                    toggleSection={() => toggleSection("cnn")}
                />

                {/* SVM */}
                <ExpandableSection
                    title="Máquina de Vectores de Soporte (SVM)"
                    content={
                        <>
                            <p><strong>SVM - Concepto:</strong> Es un algoritmo de clasificación que busca encontrar un hiperplano óptimo que separe diferentes clases de instrumentos.</p>
                            <ol>
                                <li><strong>Extracción de características:</strong> Se usan parámetros como MFCCs, energía, pitch o centroides espectrales.</li>
                                <li><strong>Separación de clases:</strong> La SVM maximiza el margen entre los puntos más cercanos de diferentes clases.</li>
                                <li><strong>Kernels:</strong> Pueden manejar datos no linealmente separables usando funciones kernel (lineal, RBF, polinomial).</li>
                            </ol>
                            <p><strong>Ventajas:</strong></p>
                            <ul>
                                <li>Buen rendimiento en conjuntos de datos pequeños o medianos.</li>
                                <li>Robusta ante ruido si se escoge bien el kernel.</li>
                                <li>Permite ajustar el equilibrio entre precisión y generalización.</li>
                            </ul>
                        </>
                    }
                    isExpanded={expandedSection === "svm"}
                    toggleSection={() => toggleSection("svm")}
                />

                {/* Clasificación Multiclase */}
                <ExpandableSection
                    title="Clasificación Multiclase"
                    content={
                        <>
                            <p><strong>Clasificación Multiclase:</strong> Extensión de la clasificación binaria para trabajar con múltiples categorías simultáneamente.</p>
                            <ul>
                                <li>En lugar de solo distinguir entre dos clases, puede identificar decenas de instrumentos diferentes.</li>
                                <li>Se implementa mediante estrategias como One-vs-One o One-vs-Rest.</li>
                                <li>Es especialmente útil cuando se trabaja con instrumentos folklóricos o regionales como el erke, siku o tarka.</li>
                            </ul>
                            <p><strong>Ejemplos de uso:</strong></p>
                            <ul>
                                <li>Detección automática de instrumentos en orquestas.</li>
                                <li>Archivos digitales de música tradicional.</li>
                                <li>Herramientas de edición de audio inteligente.</li>
                            </ul>
                            <p><strong>Desafíos:</strong> Requiere un conjunto de datos balanceado y representativo de todas las clases posibles.</p>
                        </>
                    }
                    isExpanded={expandedSection === "multiclase"}
                    toggleSection={() => toggleSection("multiclase")}
                />
            </div>
        </div>
    );
};

export default Sidebar;