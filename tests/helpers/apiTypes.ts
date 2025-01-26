export type Job = {
    id: string;
    date_posted: string;
    date_created: string;
    title: string;
    organization: string;
    organization_url: string;
    locations_raw: any[];
    employment_type: string[];
    url: string;
    source_type: string;
    source: string;
    source_domain: string;
    organization_logo: string;
    cities_derived: string[];
    regions_derived: string[];
    countries_derived: string[];
    locations_derived: string[];
    timezones_derived: string[];
    lats_derived: number[];
    lngs_derived: number[];
    remote_derived: boolean;
}