export interface SiteConfig {
  description: string;
  key: string;
  floorplans: FlooplanConfig[];
}

export interface FlooplanConfig {
  description: string;
  key: string;
  code: string;
}