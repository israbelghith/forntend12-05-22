import { Client } from "./Client";
import { Facture } from "./Facture";
import { Paiement } from "./Paiement";

export class
PaiementAvecFacture extends Paiement
{
    factures:Facture[];
    cli:Client;
}
