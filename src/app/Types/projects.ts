export interface Projects {
    projectId: Number;
    name: String;
    description: String;
    gitLink: String;
}

export interface AddProjectModel {
    name: String;
    description: String;
    gitLink: String;
}