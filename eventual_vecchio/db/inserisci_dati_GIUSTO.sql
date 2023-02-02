/******* UTENTI *********/


INSERT INTO `utente` (`idutente`, `email`, `password`,`salt`, `nome`, `cognome`, `data_nascita`, `indirizzo`, `stato`, `citta`, `numero_telefono`, `ruolo`, `attivo`) VALUES

(1, 'admin@eventual.com', '5ea91b4fc28da5267dde5c6ec1970a9cc012ad679a67648e31061af15f5c5bef310bab8de81d2b2373f4936ae1cf068c88f157f388afaff5d069511a9f59ab77', '9c341a2bc0cd2e93b1df222b994e521938f6ae74c961293952f3a98959da63c897ec619a96688b2d8865e6bc5a3357a708b1525017cd5fb296f4f8760a785094',
'Admin', 'Admin', '1998-10-17', 'Seminario', 'Italia', 'Faenza', '3391234567', 'A', 1), /*pass2019 */

/******** ORGANIZZATORI org2019*******/
(2, 'marcoaurelio@libero.com', 'cd0dd2de815eceb0f2a74d5e3d673d0a1d6cee305dbb1dd15bb70e5eed9e9c0f144143de09d7bd2217bd0ee9493def7263b8dbdadae1a9fed1b336fead0cdffe','69865b7501d6c60e32b1e5bbbaef8353733d3fc7c6c61aac6190a970ed54ab89e7de6357c8269af62d2b2a37099f06c698a6404681662fccc33151999bdda93f',
 'Marco', 'Aurelio','1960-06-01', 'Via strada 1', 'Italia', 'Milano', '3351234567', 'O', 1),
(3, 'disco.baccara@hotmail.com', '1df2bec5db83075ce49ab07cbc980245c8294f0d958b978571a1f1d1957c4535d122a258b3e8e428e32ff6dade8f4467ff5650e71a9fcc7579b10f1439ff867a','d34f7badacc8faf1ef36e912d4a3adcc57d6bb3d956a19666cd03b4ebac39b4b7f9a6ff0af61dc678ad2e468e70609e772255f19110a186850875a465823e0b1',
 'Baccara', 'DiscoClub', '1990-01-01', 'Via mazzini 50', 'Italia', 'Lugo', '3341234567', 'O', 1),
(4, 'borgo.durbecco@gmail.com', 'edd6b3a60a6680d2050dd37f388e4be99bfa3009669167bec10532182f44dae2e98c43413e8bd884f6b979dac4a2cc40b75ff01646800078aea9caf3251fc08f', 'a87d2b2854ab0c3dd20d59ef2ab235e6002d5ec64c0fbd7ee4b917d33e481c120e3936d8ba30909a81236f8ed45f025ce690996aaa1ef5ffaafd0ea35e10ae0a',
'Borgo' , 'Durbecco', '1895-01-05', 'Corso Europa 5', 'Italia', 'Faenza', '3334799899', 'O', 1),
(5, 'sofiarosa@gmail.com', 'cbba37e20ad5eea9ad53c0c5d8658cd2e0c495bae19a98b488f2d060f76d8e95e15aeaafb1323d721985808ea067b6f5b89f7cd826d7f3192c6203a8153a681e', 'e044d08d1de75c03f4f8b9fa347c2975be66b53430ee93c00479e0726af20194a4ed77a662b9771ea6feb816152f679e2e2a94e4e32b24b501c5b316d2e24568',
'Sofia', 'Rosa', '1998-01-10', 'Via Garibaldi 10', 'Italia', 'Faenza', '3334779099', 'O', 1),

/*********** PARTECIPANTI par2019*/
(6, 'andrea.leonardi@libero.com', '921c5e100e8d897342563feb91cc3d898d901d770b7ffcab6214eb265fc18d444391f92bfc54b12da24703ad160bde28522afd09ce8935be7df7f93dd2ef5fa2','19b12ae209d191a460de36712dc76ddd27eef938e4bc6349d5e48dca9a2feed44760548a2fe604d1d51a03835c544623da6a91bc51e0eaad439a603748c6c149',
'Andrea', 'Leonardi', '1998-01-01', 'Via strada 1', 'Italia', 'Milano', '3361234567', 'U', 1),
(7, 'marco.solaroli@gmail.com', '76ea6692b699ea2f0878eb58c76d27c7281a4cb3fd582d3432028736e6abc69c3bb7c9fb9eacdf666f2c75e27268e3fda23d721291b451a5facc7bf4fe2a7145','28a096e36ffd2e7b160cbd831531459a2920183d2b47433b034832d8a793341da0cda910fbb3d35398a46cb28629f1ed01a203ec8664bbc7d844342b1975bd5a', 
'Marco', 'Solaroli', '1998-12-27', 'Via fornarina 1', 'Italia', 'Faenza', '3391234567', 'U', 1),
(8, 'matteo.sintoni@hotmail.com', 'e3227aabbff3d86c6a7a63b347271172927dd4ba5d82989285aa38dc8d18021b06ddb0359f7c5a9c7e136bf9156353e2aa21af4371b22a5087c80bb25ed64842','0f2a9d62f1c5d223573e0c744d53477ead2f4a9929fd652372c6140ef8f8ebb9e285687cf75d3ff1c755764fe4222561bdb9dec4a02b9470ccec30888456d2f4',
'Matteo', 'Sintoni','1994-05-17', 'Via lega 1', 'Italia', 'Cesena', '3371334567', 'U ', 1),
(9, 'andrea.carloni@hotmail.com', '94f47d69eb890aff38ec42382eb2fd1269e9c0161ddf8c8b461e5326db160d5c0ef6df7cd9f08a95395b8ae630060b454cac31516e0d74c36005091fa78068d5','ab8fe2797012800abe69d7f9cc14d41b80a8880ee356d1bff2f97ee0dd0e96186c492aa9186d0d4477c1ab7e0bdd0c396f78abfb126e2a794ba72be96a327c5b',
'Andrea', 'Carloni', '1997-07-23', 'Via mazzini 1', 'Italia', 'Forlì', '3334834567', 'U', 1),
(10, 'devis.valmori@libero.com', '7bd9fa1ae6e20d381830844a196a3e623a85e33e33978bbac4f78bff806ce1884ad35f2951ff7c4dac32708160f60252673e6f55dbcf38eee1da964372f8b96f','2d625b43ffe9a11ee7b45a0ba8fae0bc7d7878793fe10e2155a2bcaf0f921610857f10bd6b55c6b5236fb63452b7605d15185844aa3f1ae8e07ffc31010d9b8e',
'Devis', 'Valmori', '1985-03-12', 'Via saffi 1', 'Italia', 'Roma', '3351234567', 'U', 1),
(11, 'elisa.sintoni@gmail.com', '8881598eb22dd7d734b0d3205135ca55109ce368b02895b29b41f3048b599897e6d8ef5be07e36c62712e73f000f08d95b9213f8fcee88561b03ae55576aeb85','8b989c2a5e1607ba334e08c9b4a131fa0c67a0b449ec0fb9aeb9a8e12bc802449ad2185e8fd35f657d37530649e70833fbe59c8fc1c090c5fd5e449566cf66ad',
'Elisa', 'Sintoni', '1998-11-18', 'Via strada 1', 'Italia', 'Faenza', '3354534567', 'U', 1);
ALTER TABLE `utente`
  MODIFY `idutente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

/************** categorie *****************/

INSERT INTO `categoria` (`idcategoria`, `nomecategoria`) VALUES
(1, 'Compleanni'),
(2, 'Concerti/Spettacoli'),
(3, 'Sportivi'),
(4, 'Culturali'),
(5, 'Disco');

ALTER TABLE `categoria`
  MODIFY `idcategoria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

/************* eventi ***********************/

/********** compleanno marco **************/

INSERT INTO `evento` (`idevento`, `titoloevento`, `testoevento`, `dataevento`, `luogoevento`, `anteprimaevento`, `imgevento`, `organizzatore`, `prezzo`, `capienza`) VALUES
(1, 'Compleanno di Marco', 'Compio gli anni! Anche se non si direbbe, il tempo passa anche per me! La festa di svolgerà a casa mia in campagna in via zaniboni 3 in
 modo da passare un allegro pomeriggio all aperto.
 Vi invierò a ciascuno di voi la posizione in tempo reale su whatsapp per raggiungere il posto più facilmente. 
 La festa si terrà il 15 marzo dalle 14 fino alle 21 circa (post cena), Se sei allergico o intollerante a qualche ingrediente – non preoccuparti – avvisami e ci 
 penserò io!  Voglio rendere la mia festa memorabile per voi, ma per fare questo ho bisogno di sapere entro lunedì 11 marzo il numero esatto dei partecipanti 
 alla mia festa. Aspetto un tuo messaggio di conferma su WhatsApp.', 
 '2020-03-28', 'Reda via zanboni 3', 'Compio gli anni! Anche se non si direbbe, il tempo passa anche per me! La festa di svolgerà a casa mia in campagna in via zaniboni 3 in
 modo da passare un allegro pomeriggio all aperto. ',
 'festaMarco.jpg', 2, 0, 50),

 /******* baccara *********/

(2, 'Once Upon A Time - Il Sabato Over', 'Sabato 21 Dicembre torna l appuntamento mensile al Baccara dedicato agli #OVER25: un sabato al mese, dalla cena spettacolo fino a tarda notte...Un percorso emozionale che ripercorrerà il meglio degli ultimi 20 anni musicali fino ai giorni nostri...

Sabato 21 Marzo
#ILSABATOVER: Once Upon A Time 

#Dinner #Show Ore 21.00 
#Disco Ore 23.30 

Menù Cena 

Cheesecake Salato Allo Squacquerone Con Fiocco Di Prosciutto Crudo E Insalatina Novella Al Balsamico 
****
Garganelli Mantecati Al Ragù Di Vitello E Carciofi 
****
Faraona Ripiena Al Profumo Di Arancia 
Patate A Spicchio
****
Panna Cotta Al Torroncino Con Crostini Di Panettone E Caramello 

Cena (esclusi i vini) + Festa 30€
Info & Prenotazioni 3491150322

Disco  
INGRESSO OMAGGIO PER TUTTA LA NOTTE

Main Room: POP - HOUSE 90/2000  
Prive: Reggaeton
Info & Prenotazioni Tavoli 3470602024 

Presso Discoteca Baccara - Via Felisio 106 - Lugo (RA)', 
'2020-03-21', 'Via felisio 106 - Lugo(RA)', 
'Sabato 21 Marzo torna l appuntamento mensile al Baccara dedicato agli #OVER25: un sabato al mese, dalla cena spettacolo 
fino a tarda notte...Un percorso emozionale che ripercorrerà il meglio degli ultimi 20 anni musicali fino ai giorni nostri...',
'baccara.jpg', 3, 30, 500),


/********** torneo beach volley  ************/

(3, 'BeachVolley con amici', 'A GRANDE RICHIESTA.......!!!!! SALUTIAMO INSIEME IL 2019 CON UN SUPER TORNEO DI BEACH VOLLEY
DOMENICA 15 MARZO. 
50 euro a squadra - max 12 squadre - premi ceste di salumi.
Ritrovo ore 14.00.
Torneo a gironi, 4X4 misto / 3 uomini + 1 donna.
Tabellone vincenti e perdenti
ISCRIZIONI e INFO
Sodia 3383300042', 
'2020-03-15', 'Via Emilia Levante 25', 'A GRANDE RICHIESTA.......!!!!! SALUTIAMO INSIEME IL 2019 CON UN SUPER TORNEO DI BEACH VOLLEY
DOMENICA 15 MARZO. 
50 euro a squadra - max 12 squadre - premi ceste di salumi.
Ritrovo ore 14.00.',
'beachVolley.jpg', 5, 50, 100),

/******** torneo borgo   *********/

(4, 'I° Torneo Borgo Durbecco - Memorial Roberto Bucci', 
'Il Borgo Durbecco organizza in data Sabato 30 Marzo 2019 un Torneo Sbandieratori e Musici nella categoria Singolo Tradizionale, Coppia Tradizionale, Piccola Squadra e Musici Piccola Squadra.

Programma: 
Ore 14.30 : Ritrovo presso il Pala Cattani sito in Piazzale Tambini, 5 Faenza (RA).
Ore 14.45 : Accreditamento atleti.
Ore 15.30 : Inizio del torneo. 
Nell ordine saranno svolte : 
Singolo Tradizionale, Coppia Tradizionale, Piccola Squadra e Musici Piccola Squadra (in contemporanea con la gara di Piccola Squadra).
Ore 18.30 : Termine del Torneo e trasferimento presso la Sede di Borgo Durbecco.
Ore 19.30 : Ritrovo presso la Sede di Borgo Durbecco per aperitivo e a seguire cena e festa nella Magione.

Menù: 
Costo: 13€ soci  /  15€ non soci e atleti
- Strozzapreti panna salsiccia e sangiovese
- Fagottini di pollo con patate
- Tenerina al cioccolato con panna montata
- Acqua e vino

Ricordiamo che eventuali intolleranze e allergie alimentari dovranno essere comunicate al momento della prenotazione.

Prenotazioni entro e non oltre Domenica 17 Marzo presso il Bar del Rione o tramite mail.

Ricordiamo che la cena e la festa sono aperte a tutti, per la cena è necessaria la prenotazione.

Saranno Ospiti durante l aperitivo e la festa @onderadiocoverband

Seguiranno aggiornamenti...

Per info contattare:
- Andrea Carloni 349.0624606
- Devis Valmori 344.4566776
- borgo.durbecco@gmail.com', 

'2020-03-30', 'Piazza Frà Saba 5,', 
'Il Borgo Durbecco organizza in data Sabato 30 Marzo 2019 un Torneo Sbandieratori e Musici nella categoria Singolo Tradizionale, Coppia Tradizionale, Piccola Squadra e Musici Piccola Squadra.

Programma: 
- Ore 14.30 : Ritrovo presso il Pala Cattani sito in Piazzale Tambini, 5 Faenza (RA).
- Ore 14.45 : Accreditamento atleti.
- Ore 15.30 : Inizio del torneo. ',
'torneoBorgo.jpg', 4, 15, 1000);



ALTER TABLE `evento`
  MODIFY `idevento` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

/**************** evento ha categoria *******************/

INSERT INTO `evento_categoria` (`evento`, `categoria`) VALUES
(1, 1),  /* marco compleanno*/
(2, 5),   /* baccara  disco*/
(3, 3),    /* torneo beach sportivo*/
(4, 2),   /* torneo borgo concerto-spettacolo  */
(4, 3),                /* sportivo   */
(4, 4),                /* culturale */
(4, 5);                /*  disco   */

INSERT INTO `evento_utente` (`evento`, `partecipante`) VALUES

(2, 1),   /* andrea */
(2, 3),   /* matteo */
(2, 6),   /* elisa */

(3, 2),    /* matteo */
(3, 6),    /* elisa */

(4, 1),    /* andrea */
(4, 2),    /* marco */
(4, 4),    /* devis */
(4, 5);    /* andrea carloni */

INSERT INTO `carrello` (`idcarrello`, `utente`) VALUES

 /* carrello per ogni partecipante */

(1,6), 
(2,7),
(3,8),
(4,9),
(5,10),
(6,11);

INSERT INTO `notifica` (`idnotifica`, `testo`) VALUES

(1, "Benvenuto sul sito eventual!"),
(2, "E' stato aggiunto un nuovo evento!"),
(3, "il costo di ingresso è 30 euro!"),
(4, "max 12 squadre!"),
(5, "prezzo del menù per i non soci a 15 euro"),
(6,"Un nuovo utente si è registrato, abilitalo!"), 
(7, "L'Admin ha segnalato il tuo evento!");


INSERT INTO `evento_notifica` (`evento`, `notifica`) VALUES

(1,1),
(2,2),
(3,3),
(4,4);

INSERT INTO `utente_notifica` (`destinatario`, `notifica`, `mittente`) VALUES

(2,1,1),
(3,1,1),
(4,1,1),
(5,1,1),
(6,1,1),
(7,1,1),
(8,1,1),
(9,1,1),
(10,1,1),
(11,1,1);