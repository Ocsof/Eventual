  -- MySQL Workbench Forward Engineering

  SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
  SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
  SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

  -- -----------------------------------------------------
  -- Schema eventual
  -- -----------------------------------------------------
  CREATE SCHEMA IF NOT EXISTS `eventual` DEFAULT CHARACTER SET utf8 ;
  USE `eventual` ;

  -- -----------------------------------------------------
  -- Table `eventual`.`utente`
  -- -----------------------------------------------------
  CREATE TABLE IF NOT EXISTS `eventual`.`utente` (
    `idutente` INT NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(100) NOT NULL,
    `password` VARCHAR(128) NOT NULL, 
    `salt` VARCHAR(128) NOT NULL,
    `nome` VARCHAR(100) NOT NULL,
    `cognome` VARCHAR(100) NOT NULL,
    `data_nascita` DATE NOT NULL,
    `indirizzo` VARCHAR(200) NOT NULL,
    `stato` VARCHAR(50) NOT NULL,
    `citta` VARCHAR(50) NOT NULL,
    `numero_telefono` VARCHAR(12) NOT NULL,
    `ruolo` VARCHAR(1) NOT NULL,
    `attivo` INT NOT NULL,
    PRIMARY KEY (`idutente`))
  ENGINE = InnoDB;

  -- -----------------------------------------------------
  -- Table `eventual`.`evento`
  -- -----------------------------------------------------
  CREATE TABLE IF NOT EXISTS `eventual`.`evento` (
    `idevento` INT NOT NULL AUTO_INCREMENT,
    `titoloevento` VARCHAR(100) NOT NULL,
    `testoevento` MEDIUMTEXT NOT NULL,
    `dataevento` DATE NOT NULL,
    `luogoevento` VARCHAR(45) NOT NULL,
    `anteprimaevento` MEDIUMTEXT NOT NULL,
    `imgevento` VARCHAR(100) NOT NULL,
    `organizzatore` INT NOT NULL,
    `prezzo` INT NOT NULL,
    `capienza` INT NOT NULL,
    PRIMARY KEY (`idevento`),
    INDEX `fk_evento_organizzatore_idx` (`organizzatore` ASC),
    CONSTRAINT `fk_evento_organizzatore`
      FOREIGN KEY (`organizzatore`)
      REFERENCES `eventual`.`utente` (`idutente`)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION)
  ENGINE = InnoDB;

  -- -----------------------------------------------------
  -- Table `eventual`.`evento_utente`
  -- -----------------------------------------------------
  CREATE TABLE IF NOT EXISTS `eventual`.`evento_utente` (
    `evento` INT NOT NULL,
    `partecipante` INT NOT NULL,
    PRIMARY KEY (`evento`, `partecipante`),
    INDEX `fk_evento_utente_partecipante1_idx` (`partecipante` ASC),
    INDEX `fk_evento_utente_evento1_idx` (`evento` ASC),
    CONSTRAINT `fk_evento_utente_evento1_idx`
      FOREIGN KEY (`evento`)
      REFERENCES `eventual`.`evento` (`idevento`)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION,
    CONSTRAINT `fk_evento_utente_partecipante1_idx`
      FOREIGN KEY (`partecipante`)
      REFERENCES `eventual`.`utente` (`idutente`)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION)
  ENGINE = InnoDB;


  -- -----------------------------------------------------
  -- Table `eventual`.`categoria`
  -- -----------------------------------------------------
  CREATE TABLE IF NOT EXISTS `eventual`.`categoria` (
    `idcategoria` INT NOT NULL AUTO_INCREMENT,
    `nomecategoria` VARCHAR(50) NOT NULL,
    PRIMARY KEY (`idcategoria`))
  ENGINE = InnoDB;


  -- -----------------------------------------------------
  -- Table `eventual`.`evento_categoria`
  -- -----------------------------------------------------
  CREATE TABLE IF NOT EXISTS `eventual`.`evento_categoria` (
    `evento` INT NOT NULL,
    `categoria` INT NOT NULL,
    PRIMARY KEY (`evento`, `categoria`),
    INDEX `fk_evento_categoria_categoria1_idx` (`categoria` ASC),
    INDEX `fk_evento_categoria_evento1_idx` (`evento` ASC),
    CONSTRAINT `fk_evento_categoria_evento1`
      FOREIGN KEY (`evento`)
      REFERENCES `eventual`.`evento` (`idevento`)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION,
    CONSTRAINT `fk_evento_categoria_categoria1`
      FOREIGN KEY (`categoria`)
      REFERENCES `eventual`.`categoria` (`idcategoria`)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION)
  ENGINE = InnoDB;


  -- -----------------------------------------------------
  -- Table `eventual`.`notifica`
  -- -----------------------------------------------------
  CREATE TABLE IF NOT EXISTS `eventual`.`notifica` (
    `idnotifica` INT NOT NULL AUTO_INCREMENT,
    `testo` TEXT NOT NULL,
    PRIMARY KEY (`idnotifica`))
  ENGINE = InnoDB;


  -- -----------------------------------------------------
  -- Table `eventual`.`evento_notifica`
  -- -----------------------------------------------------
  CREATE TABLE IF NOT EXISTS `eventual`.`evento_notifica` (
    `evento` INT NOT NULL,
    `notifica` INT NOT NULL,
    PRIMARY KEY (`evento`, `notifica`),
    INDEX `fk_evento_notifica_notifica1_idx` (`notifica` ASC),
    INDEX `fk_evento_notifica_evento1_idx` (`evento` ASC),
    CONSTRAINT `fk_evento_notifica_evento1`
      FOREIGN KEY (`evento`)
      REFERENCES `eventual`.`evento` (`idevento`)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION,
    CONSTRAINT `fk_evento_notifica_notifica1`
      FOREIGN KEY (`notifica`)
      REFERENCES `eventual`.`notifica` (`idnotifica`)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION)
  ENGINE = InnoDB;

  -- -----------------------------------------------------
  -- Table `eventual`.`utente_notifica`
  -- -----------------------------------------------------
  CREATE TABLE IF NOT EXISTS `eventual`.`utente_notifica` (
    `destinatario` INT NOT NULL,
    `notifica` INT NOT NULL,
    `mittente` INT NOT NULL,
    PRIMARY KEY (`destinatario`, `notifica`),
    INDEX `fk_destinatario_notifica_notifica1_idx` (`notifica` ASC),
    INDEX `fk_destinatario_notifica_destinatario1_idx` (`destinatario` ASC),
    CONSTRAINT `fk_destinatario_notifica_destinatario1`
      FOREIGN KEY (`destinatario`)
      REFERENCES `eventual`.`utente` (`idutente`)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION,
    CONSTRAINT `fk_destinatario_notifica_notifica1`
      FOREIGN KEY (`notifica`)
      REFERENCES `eventual`.`notifica` (`idnotifica`)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION)
  ENGINE = InnoDB;


  -- -----------------------------------------------------
  -- Table `eventual`.`carrello`
  -- -----------------------------------------------------
  CREATE TABLE IF NOT EXISTS `eventual`.`carrello` (
    `idcarrello` INT NOT NULL AUTO_INCREMENT,
    `utente` INT NOT NULL,
    PRIMARY KEY (`idcarrello`),
    INDEX `fk_carrello_utente1_idx` (`utente` ASC),
    CONSTRAINT `fk_carrello_utente1_idx`
      FOREIGN KEY (`utente`)
      REFERENCES `eventual`.`utente` (`idutente`)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION)
  ENGINE = InnoDB;


  -- -----------------------------------------------------
  -- Table `eventual`.`carrello_evento`
  -- -----------------------------------------------------
  CREATE TABLE IF NOT EXISTS `eventual`.`carrello_evento` (
    `carrello` INT NOT NULL,
    `evento` INT NOT NULL,
    PRIMARY KEY (`carrello`, `evento`),
    INDEX `fk_carrello_evento_carrello1_idx` (`carrello` ASC),
    INDEX `fk_carrello_evento_evento1_idx` (`evento` ASC),
    CONSTRAINT `fk_carrello_evento_evento1_idx`
      FOREIGN KEY (`evento`)
      REFERENCES `eventual`.`evento` (`idevento`)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION,
    CONSTRAINT `fk_carrello_evento_carrello1_idx`
      FOREIGN KEY (`carrello`)
      REFERENCES `eventual`.`carrello` (`idcarrello`)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION)
  ENGINE = InnoDB;

  SET SQL_MODE=@OLD_SQL_MODE;
  SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
  SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;