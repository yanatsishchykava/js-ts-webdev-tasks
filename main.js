
    const content = document.getElementById('content');
    
    const container = document.createElement('div');
    container.className = 'container';
    
    const header = document.createElement('header');
    header.className = 'header';

    const title = document.createElement('h1');
    title.className = 'title';
    title.textContent = 'Last works';

    const buttonExplore = document.createElement('button');
    buttonExplore.className = 'explore-button';
    buttonExplore.textContent = 'Explore Showcase';

    header.appendChild(title);
    header.appendChild(buttonExplore);

    const cardsGrid = document.createElement('div');
    cardsGrid.className = 'cards-grid';
    cardsGrid.id = 'cards-container';
    
    document.body.prepend(header);
    container.appendChild(cardsGrid);
    content.appendChild(container);

    const cardsData = [
        {
            title: "Startup Framework",
            description: "Startup is a powerful tool for quick and convenient proto-typing of your projects. It will fit most projects because it contains up-to-date and modern web elements.",
            buttonText: "Explore"
        },
        {
            title: "Web Generator",
            description: "Startup is a powerful tool for quick and convenient proto-typing of your projects. It will fit most projects because it contains up-to-date and modern web elements.",
            buttonText: "Explore"
        },
        {
            title: "Slides 4",
            description: "All of these components are made in the same style, and can easily be inegrated into projects, allowing you to create hundreds of solutions for your future projects.",
            buttonText: "Explore"
        },
        {
            title: "Postcards",
            description: "All frequently used elements are now in symbols. Use them to create interfaces really fast. Easily change icons, colors and text. Add new symbols to customize your design.",
            buttonText: "Explore"
        }
    ];
    
    cardsData.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        
        const cardContent = document.createElement('div');
        cardContent.className = 'card-content';
        
        const titleElement = document.createElement('h2');
        titleElement.textContent = card.title;
        
        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = card.description;
        
        const buttonElement = document.createElement('a');
        buttonElement.className = 'explore-btn';
        buttonElement.textContent = card.buttonText;
        buttonElement.href = '#';

        cardContent.appendChild(titleElement);
        cardContent.appendChild(descriptionElement);
        cardContent.appendChild(buttonElement);
        cardElement.appendChild(cardContent);
        cardsGrid.appendChild(cardElement);
    });
