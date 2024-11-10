describe('Sports Video Playback Tester', () => {
    beforeEach(() => {
        cy.visit('index.html');
    });

    it('should play and pause the video', () => {
        cy.get('#playPause').click().should('contain', 'Pause');
        cy.get('#playPause').click().should('contain', 'Play');
    });

    it('should skip forward 15 seconds', () => {
        cy.get('video').then(video => {
            const initialTime = video[0].currentTime;
            cy.get('#skipForward').click();
            cy.wrap(video[0]).its('currentTime').should('be.gt', initialTime + 14);
        });
    });

    it('should skip backward 15 seconds', () => {
        cy.get('video').then(video => {
            video[0].currentTime = 20;
            cy.get('#skipBackward').click();
            cy.wrap(video[0]).its('currentTime').should('be.lt', 20);
        });
    });

    it('should replay the last 10 seconds', () => {
        cy.get('video').then(video => {
            video[0].currentTime = 20;
            cy.get('#replayLast10').click();
            cy.wrap(video[0]).its('currentTime').should('eq', 10);
        });
    });
});
