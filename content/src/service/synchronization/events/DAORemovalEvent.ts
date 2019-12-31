import { ClusterEvent } from "./ClusterEvent";
import { Timestamp } from "../../Service";
import { ContentServerClient } from "../clients/contentserver/ContentServerClient";
import { ServerName } from "../../naming/NameKeeper";

export class DAORemovalEvent extends ClusterEvent<DAORemoval> { }

export type DAORemoval = {
    serverRemoved: ServerName,
    lastKnownTimestamp: Timestamp,
    remainingServers: ContentServerClient[],
}