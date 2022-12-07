const bosAlanKategoriID = (req, res, next) => {
  const { KategoriId } = req.body;

  if (KategoriId) {
    return next();
  }

  return res.send({ message: "Boş değer olamaz" });
};

const bosAlanKategoriAd = (req, res, next) => {
  const { KategoriAdi } = req.body;

  if (KategoriAdi) {
    return next();
  }

  return res.send({ message: "Boş değer olamaz" });
};

const bosAlanUrunId = (req, res, next) => {
  const { UrunID } = req.body;

  if (UrunID) {
    return next();
  }

  return res.send({ message: "Boş değer olamaz" });
};

const bosAlanUrun = (req, res, next) => {
  const {
    UrunAdi,
    UrunAciklama,
    UrunResimUrl,
    UrunFiyat,
    UrunStokAdedi,
    UrunKategoriID,
    UrunDurumuID,
  } = req.body;

  if (
    UrunAdi &&
    UrunAciklama &&
    UrunResimUrl &&
    UrunFiyat &&
    UrunStokAdedi &&
    UrunKategoriID &&
    UrunDurumuID
  ) {
    return next();
  }
  return res.send({ message: "Boş değer olamaz" });
};

const bosAlanSiparis = (req, res, next) => {
  const { SiparisDurumID } = req.body;

  if (SiparisDurumID) {
    return next();
  }
  return res.send({ message: "Boş değer olamaz" });
};


module.exports = {
  bosAlanKategoriID,
  bosAlanKategoriAd,
  bosAlanUrun,
  bosAlanSiparis,
  bosAlanUrunId,
};
