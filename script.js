/* ================= INDUSTRIAL CORE DOM TARGET ATOM STORAGE ================= */
const imageInput = document.getElementById("imageInput");
const uploadBtn = document.getElementById("uploadBtn");
const addMoreBtn = document.getElementById("addMoreBtn");
const clearBtn = document.getElementById("clearBtn");
const convertBtn = document.getElementById("convertBtn");
const imageGrid = document.getElementById("imageGrid");
const dropZone = document.getElementById("dropZone");
const loader = document.getElementById("loader");
const toast = document.getElementById("toast");
const toastMsg = document.getElementById("toastMsg");
const themeBtn = document.getElementById("themeBtn");
const pdfName = document.getElementById("pdfName");
const pageSize = document.getElementById("pageSize");
const orientation = document.getElementById("orientation");
const marginSize = document.getElementById("marginSize");
const quality = document.getElementById("quality");
const qualityVal = document.getElementById("qualityVal");
const workspaceControls = document.getElementById("workspaceControls");
const imageCount = document.getElementById("imageCount");

/* ================= MEMORY CONTEXT ARCHIVE DATA STORAGE ================= */
let images = [];

/* ================= CAPTURE COMPRESSION SLIDER METRICS INTERACTION ================= */
quality.addEventListener('input', (e) => {
    qualityVal.textContent = `${e.target.value}%`;
});

/* ================= VECTOR CONTEXT TOAST NOTIFIER ENGINES ================= */
function showToast(message) {
    toastMsg.innerText = message;
    toast.classList.add("show");
    setTimeout(() => {
        toast.classList.remove("show");
    }, 2000);
}

/* ================= FILE LINK BINDINGS AND FILE LOADER INPUTS ================= */
uploadBtn.addEventListener("click", () => imageInput.click());
addMoreBtn.addEventListener("click", () => imageInput.click());

imageInput.addEventListener("change", (event) => {
    handleFiles(event.target.files);
});

/* ================= FEATURE 1: VIEWPORT HOVER INTERSECTION LISTENERS ================= */
['dragenter', 'dragover'].forEach(eventName => {
    dropZone.addEventListener(eventName, (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropZone.classList.add('dragover-active');
    }, false);
});

['dragleave', 'drop'].forEach(eventName => {
    dropZone.addEventListener(eventName, (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropZone.classList.remove('dragover-active');
    }, false);
});

dropZone.addEventListener("drop", (e) => {
    const files = e.dataTransfer.files;
    handleFiles(files);
});

/* ================= ASYNC CACHE STORAGE ENGINE OPERATIONS ================= */
function handleFiles(files) {
    const allFiles = Array.from(files);
    let processedCount = 0;

    allFiles.forEach((file) => {
        if (!file.type.startsWith("image/")) {
            showToast("Invalid File Format Skipped");
            return;
        }

        const reader = new FileReader();
        reader.onload = function(e) {
            // Feature 3: Construct metadata array architecture mapping initial base metrics rotation states
            images.push({
                name: file.name,
                url: e.target.result,
                rotation: 0 
            });

            processedCount++;
            if (processedCount === allFiles.length || processedCount > 0) {
                renderImages();
            }
        };
        reader.readAsDataURL(file);
    });

    /* Important state refresh clear block tracker */
    imageInput.value = "";
}

/* ================= FEATURE 2: INSTANTIATE SORTABLE DRAG MANAGEMENT MATRIX ================= */
new Sortable(imageGrid, {
    animation: 220,
    ghostClass: 'sortable-ghost',
    chosenClass: 'sortable-chosen',
    onEnd: function () {
        // Rearranging structural memory allocation layouts to correspond directly to altered viewport indexes nodes
        const sortedSequenceMap = [];
        const targetedDomCards = imageGrid.querySelectorAll('.image-card');
        
        targetedDomCards.forEach(card => {
            const assignedMetaIndex = parseInt(card.getAttribute('data-index'));
            sortedSequenceMap.push(images[assignedMetaIndex]);
        });
        
        images = sortedSequenceMap;
        renderImages(); // Refreshes element attachments nodes maps cleanly
    }
});

/* ================= GENERATIVE RENDERING FOR WORKSPACE GRID STRUCTS ================= */
function renderImages() {
    imageGrid.innerHTML = "";
    
    // Manage dynamic functional metric counter presentation states blocks visibility
    if (images.length > 0) {
        workspaceControls.classList.remove("hidden");
        imageCount.textContent = images.length;
    } else {
        workspaceControls.classList.add("hidden");
    }

    images.forEach((image, index) => {
        const card = document.createElement("div");
        card.className = "image-card bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 rounded-2xl p-3 relative shadow-sm group select-none cursor-grab active:cursor-grabbing hover:shadow-md smooth-transition flex flex-col justify-between";
        card.setAttribute('data-index', index);

        card.innerHTML = `
            <div class="relative w-full aspect-square rounded-xl overflow-hidden bg-slate-50 dark:bg-slate-950/40 flex items-center justify-center mb-3 border border-slate-100 dark:border-slate-800/30">
                <img src="${image.url}" alt="Preview Core Asset" draggable="false" class="max-h-full max-w-full object-contain smooth-transition" style="transform: rotate(${image.rotation}deg)">
                
                <button class="remove-btn absolute top-2 right-2 bg-rose-500 hover:bg-rose-600 text-white w-7 h-7 rounded-lg flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 smooth-transition cursor-pointer z-10" data-index="${index}" title="Delete Frame Asset">
                    <i class="fa-solid fa-xmark text-xs"></i>
                </button>

                <button class="rotate-btn absolute bottom-2 right-2 bg-slate-900/90 dark:bg-slate-800/90 hover:bg-indigo-600 text-white w-7 h-7 rounded-lg flex items-center justify-center shadow-md backdrop-blur-sm opacity-0 group-hover:opacity-100 smooth-transition cursor-pointer z-10" data-index="${index}" title="Rotate 90 Deg Matrix">
                    <i class="fa-solid fa-rotate-right text-xs"></i>
                </button>
            </div>

            <div class="px-1 py-0.5">
                <h3 class="text-xs font-bold truncate max-w-full text-slate-700 dark:text-slate-300 mb-0.5">${image.name}</h3>
                <p class="text-[10px] uppercase font-black tracking-wider text-indigo-500">Node Sync Verified</p>
            </div>
        `;
        imageGrid.appendChild(card);
    });

    attachInteractiveCardListeners();
}

/* ================= BIND AND LINK CARD COMPONENT ACTION HANDLERS ================= */
function attachInteractiveCardListeners() {
    // Specific item isolation deletions actions links
    document.querySelectorAll(".remove-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const targetIndex = btn.dataset.index;
            images.splice(targetIndex, 1);
            renderImages();
            showToast("Asset Removed From Memory Stack");
        });
    });

    // Feature 3: Process individual rotation calculations increments tracking
    document.querySelectorAll(".rotate-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const targetIndex = btn.dataset.index;
            images[targetIndex].rotation = (images[targetIndex].rotation + 90) % 360;
            renderImages();
        });
    });
}

/* ================= FEATURE 9: COMPLETE FLUSH ACTION TRIGGER ENGINE ================= */
clearBtn.addEventListener("click", () => {
    images = [];
    renderImages();
    showToast("Ecosystem Cache Purged Successfully");
});

/* ================= FEATURE 10: DESIGN THEME TOGGLE (LIGHT / DARK SWITCHER) ================= */
themeBtn.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
    showToast("Workspace Context Shifted");
});

/* ================= HIGH INTENSITY VECTOR CONVERSION COMPILATION ENGINE (PDF) ================= */
convertBtn.addEventListener("click", async () => {
    if (images.length === 0) {
        showToast("Please Add Target Assets First");
        return;
    }

    // Unveils synchronous background activity masking layout overlay systems
    loader.style.display = "flex";
    loader.classList.remove("hidden");

    // Micro timing delay structural padding ensuring animation engine stability frame renders
    await new Promise(resolve => setTimeout(resolve, 200));

    const { jsPDF } = window.jspdf;
    const requestedFormat = pageSize.value;
    const requestedOrientation = orientation.value;
    const appliedMarginValue = parseFloat(marginSize.value);
    const optimizationCompressionFactor = parseFloat(quality.value) / 100;

    let configurationSet = {
        orientation: requestedOrientation,
        unit: 'mm'
    };

    if (requestedFormat !== 'original') {
        configurationSet.format = requestedFormat;
    }

    const pdfInstance = new jsPDF(configurationSet);

    for (let i = 0; i < images.length; i++) {
        const structuralImageInstance = images[i];

        const imgElement = new Image();
        imgElement.src = structuralImageInstance.url;
        await new Promise((resolve) => { imgElement.onload = resolve; });

        // Instantiate transient offscreen canvas layers to calculate orientations and optimize quality structures
        const processingCanvas = document.createElement('canvas');
        const processingContext = processingCanvas.getContext('2d');

        // Swap boundary alignments maps if current image frame angle parameters sit perpendicular
        const structuralPerpendicularToggle = (structuralImageInstance.rotation / 90) % 2 !== 0;
        processingCanvas.width = structuralPerpendicularToggle ? imgElement.height : imgElement.width;
        processingCanvas.height = structuralPerpendicularToggle ? imgElement.width : imgElement.height;

        // Perform spatial transformation rotation operations inside offscreen processing elements framework natively
        processingContext.translate(processingCanvas.width / 2, processingCanvas.height / 2);
        processingContext.rotate((structuralImageInstance.rotation * Math.PI) / 180);
        processingContext.drawImage(imgElement, -imgElement.width / 2, -imgElement.height / 2);

        // Feature 6: JPEG conversion utilising live application rendering optimization slider parameters
        const calibratedImagePayload = processingCanvas.toDataURL('image/jpeg', optimizationCompressionFactor);

        /* Map and align dimensional target page parameters allocations grids sheets */
        if (i > 0) {
            if (requestedFormat === 'original') {
                // Feature 4: Converting native canvas coordinate sizes ($1\text{ px} = 0.264583\text{ mm}$) to document values
                pdfInstance.addPage([processingCanvas.width * 0.264583, processingCanvas.height * 0.264583], requestedOrientation);
            } else {
                pdfInstance.addPage(requestedFormat, requestedOrientation);
            }
        } else if (requestedFormat === 'original') {
            // Reconfigure base root tracking structural layout matrices dimension values
            pdfInstance.setPage(1);
            pdfInstance.internal.pageSize.setWidth(processingCanvas.width * 0.264583);
            pdfInstance.internal.pageSize.setHeight(processingCanvas.height * 0.264583);
        }

        let documentPageWidth = pdfInstance.internal.pageSize.getWidth();
        let documentPageHeight = pdfInstance.internal.pageSize.getHeight();

        // Feature 5: Configure margin border frame padding logic paths calculations
        let dynamicPrintBoundWidth = documentPageWidth - (appliedMarginValue * 2);
        let dynamicPrintBoundHeight = documentPageHeight - (appliedMarginValue * 2);

        // Aspect ratio lock system scaling algorithm parameters mapping
        const documentScalingRatio = Math.min(dynamicPrintBoundWidth / processingCanvas.width, dynamicPrintBoundHeight / processingCanvas.height);
        const physicalPrintWidth = processingCanvas.width * documentScalingRatio;
        const physicalPrintHeight = processingCanvas.height * documentScalingRatio;

        // Balance centering coordinate offsets while applying configured boundary inset metrics maps
        const absolutePrintXPoint = appliedMarginValue + (dynamicPrintBoundWidth - physicalPrintWidth) / 2;
        const absolutePrintYPoint = appliedMarginValue + (dynamicPrintBoundHeight - physicalPrintHeight) / 2;

        pdfInstance.addImage(calibratedImagePayload, "JPEG", absolutePrintXPoint, absolutePrintYPoint, physicalPrintWidth, physicalPrintHeight);
    }

    // Feature 8: Dynamic naming output parsing selector strings values
    const generatedDocumentSaveName = pdfName.value.trim() || "ImageToPDFPro_Document";
    pdfInstance.save(`${generatedDocumentSaveName}.pdf`);

    // Teardown asynchronous operational loading overlays state mappings
    loader.style.display = "none";
    showToast("High Fidelity Document Package Downloaded!");
});

/* ================= HARDWARE LEVEL SYSTEM PREVENTIONS INTRUSIONS ================= */
window.addEventListener("dragover", e => e.preventDefault());
window.addEventListener("drop", e => e.preventDefault());