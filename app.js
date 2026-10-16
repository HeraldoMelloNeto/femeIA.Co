let currentMode = 'd2n';
const dropZone = document.getElementById('drop-zone');
const fileInput = document.getElementById('file-input');
const convertBtn = document.getElementById('convert-btn');
const statusArea = document.getElementById('status-area');
const statusText = document.getElementById('status-text');
const progressBar = document.getElementById('progress');

let selectedFiles = [];

function switchTab(mode) {
    currentMode = mode;
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    event.target.classList.add('active');
    
    // Reset state
    selectedFiles = [];
    convertBtn.disabled = true;
    statusArea.classList.add('hidden');
    dropZone.querySelector('p').innerHTML = `Arraste seus arquivos ${mode === 'd2n' ? 'DICOM' : 'NIfTI'} aqui ou <strong>clique para selecionar</strong>`;
}

// Drag & Drop events
dropZone.addEventListener('click', () => fileInput.click());

dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.classList.add('dragover');
});

dropZone.addEventListener('dragleave', () => {
    dropZone.classList.remove('dragover');
});

dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('dragover');
    handleFiles(e.dataTransfer.files);
});

fileInput.addEventListener('change', (e) => {
    handleFiles(e.target.files);
});

function handleFiles(files) {
    if (files.length > 0) {
        selectedFiles = Array.from(files);
        convertBtn.disabled = false;
        dropZone.querySelector('p').innerHTML = `<strong>${files.length} arquivo(s) selecionado(s)</strong> 🌸`;
    }
}

convertBtn.addEventListener('click', async () => {
    if (selectedFiles.length === 0) return;
    
    convertBtn.disabled = true;
    statusArea.classList.remove('hidden');
    progressBar.style.width = '10%';
    statusText.innerText = 'Inicializando motor de IA... ✨';
    
    // Simulação do processamento robusto usando a arquitetura client-side itk-wasm
    // Em um ambiente de produção real, as chamadas para itk.readImageDICOMFileSeries 
    // ou itk.writeImage seriam feitas aqui convertendo os buffers.
    
    setTimeout(() => {
        progressBar.style.width = '50%';
        statusText.innerText = `Lendo e estruturando os arquivos no FêmeIA... 💅`;
        
        setTimeout(() => {
            progressBar.style.width = '100%';
            statusText.innerText = 'Conversão concluída com sucesso! 🎉 Preparando download...';
            
            // Simula o download do arquivo convertido
            setTimeout(() => {
                alert("Em produção, seu arquivo NIfTI/DICOM convertido começaria a ser baixado agora! Código base estruturado com sucesso.");
                // Reset
                convertBtn.disabled = false;
                progressBar.style.width = '0%';
                statusArea.classList.add('hidden');
                dropZone.querySelector('p').innerHTML = `Arraste seus arquivos aqui ou <strong>clique para selecionar</strong>`;
                selectedFiles = [];
            }, 1000);
            
        }, 1500);
    }, 1500);
});
