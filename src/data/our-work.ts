import roofTopChillerUnits from '../assets/our-work/rooftop-chiller-units-lagos.jpeg';
import techniciansHvacServicing from '../assets/our-work/mykado-technicians-hvac-servicing.jpeg';
import technicianServicingCoolingCoil from '../assets/our-work/technician-servicing-cooling-coil.jpeg';
import technicianInspectingChillerBank from '../assets/our-work/technician-inspecting-chiller-bank.jpeg';
import teamRefrigerantRecovery from '../assets/our-work/mykado-team-refrigerant-recovery.jpeg';
import chillerCompressorInspection from '../assets/our-work/chiller-compressor-inspection.jpeg';

export const workPhotos = [
  {
    image: techniciansHvacServicing,
    alt: 'Mykado technicians servicing rooftop chiller units in Lagos',
    caption: 'Our team on-site for scheduled chiller maintenance',
  },
  {
    image: technicianServicingCoolingCoil,
    alt: 'Mykado technician inspecting a rooftop chiller coil bank in Lagos',
    caption: 'Coil inspection during a routine servicing visit',
  },
  {
    image: technicianInspectingChillerBank,
    alt: 'Mykado technician servicing a chiller cooling coil in Lagos',
    caption: 'Hands-on coil servicing on an active cooling system',
  },
  {
    image: teamRefrigerantRecovery,
    alt: 'Mykado team performing refrigerant recovery on a chiller unit in Lagos',
    caption: 'Refrigerant recovery ahead of compressor servicing',
  },
  {
    image: roofTopChillerUnits,
    alt: 'Rooftop chiller and AHU units serviced by Mykado Engineering in Lagos',
    caption: 'Rooftop chiller bank at a completed client site',
  },
  {
    image: chillerCompressorInspection,
    alt: 'Close-up of a chiller compressor unit inspected by Mykado Engineering',
    caption: 'Compressor inspection as part of preventive maintenance',
  },
] as const;

export type WorkPhoto = (typeof workPhotos)[number];
