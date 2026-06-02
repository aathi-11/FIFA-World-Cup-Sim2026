import React from 'react';

/**
 * Maps 3-letter FIFA/ISO country codes to 2-letter codes used by FlagCDN.
 */
export const getTeamFlagUrl = (teamId: string): string => {
  const mapping: Record<string, string> = {
    MEX: "mx", KOR: "kr", RSA: "za", CZE: "cz",
    CAN: "ca", SUI: "ch", QAT: "qa", BIH: "ba",
    BRA: "br", MAR: "ma", SCO: "gb-sct", HAI: "ht",
    USA: "us", PAR: "py", AUS: "au", TUR: "tr",
    GER: "de", ECU: "ec", CIV: "ci", CUW: "cw",
    NED: "nl", JPN: "jp", TUN: "tn", SWE: "se",
    BEL: "be", IRN: "ir", EGY: "eg", NZL: "nz",
    ESP: "es", URU: "uy", KSA: "sa", CPV: "cv",
    FRA: "fr", SEN: "sn", NOR: "no", IRQ: "iq",
    ARG: "ar", ALG: "dz", AUT: "at", JOR: "jo",
    POR: "pt", COD: "cd", UZB: "uz", COL: "co",
    ENG: "gb-eng", CRO: "hr", GHA: "gh", PAN: "pa"
  };
  const code = mapping[teamId.toUpperCase()] || "un";
  return `https://flagcdn.com/w40/${code.toLowerCase()}.png`;
};

interface FlagProps {
  teamId: string;
  className?: string;
  style?: React.CSSProperties;
}

export const Flag: React.FC<FlagProps> = ({ teamId, className, style }) => {
  return (
    <img 
      src={getTeamFlagUrl(teamId)} 
      alt={teamId}
      className={className}
      style={{
        width: '1.35em',
        height: '0.95em',
        objectFit: 'cover',
        borderRadius: '2px',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.4)',
        display: 'inline-block',
        verticalAlign: 'middle',
        marginRight: '0.2em',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        ...style
      }}
      onError={(e) => {
        // Hide image if it fails to load
        (e.target as HTMLImageElement).style.opacity = '0';
      }}
    />
  );
};
