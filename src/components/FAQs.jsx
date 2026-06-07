import React from "react";
import { getServices } from "../data/services";
import { useTranslation } from "react-i18next";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Typography,
} from "@mui/material";
import { East, ExpandMore } from "@mui/icons-material";

const FAQs = (props) => {
  const { t } = useTranslation();
  const service = getServices(t).find((service) => service.id === props.id);
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "flex-start",
        gap: 4,
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Box sx={{ flex: 1 }}>
        <Typography
          variant="h5"
          sx={{
            position: "relative",
            "&::after": {
              position: "absolute",
              content: '""',
              bottom: -10,
              left: 0,
              width: 50,
              height: 3,
              bgcolor: "primary.main",
            },
          }}
        >
          {t("faq.title")}
        </Typography>
        <Box sx={{ mt: 4 }}>
          {service.faqs.map((faq, index) => (
            <Accordion
              sx={{
                mt: 2,
                borderRadius: 3,
                "&:before": {
                  display: "none",
                },
              }}
              key={index}
            >
              <AccordionSummary
                expandIcon={<ExpandMore sx={{ color: "primary.main" }} />}
              >
                <Typography
                  variant="body1"
                  sx={{ fontSize: 16, fontWeight: 600 }}
                >
                  {faq.question}
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: 14,
                    fontWeight: 500,
                    color: "text.secondary",
                  }}
                >
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          flex: 1,
          px: 5,
          py: 5,
          position: "relative",
          overflow: "hidden",
          borderRadius: 3,
          cursor: "pointer",

          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,

            backgroundImage: {
              xs: `linear-gradient(
                      to bottom,
                      rgba(17, 24, 39, 1) 0%,
                      rgba(17, 24, 39, 1) 30%,
                      rgba(17, 24, 39, 0.5)
                    ),
                    url(${service.image})`,
              md: `linear-gradient(
                      to right,
                      rgba(17, 24, 39, 1) 0%,
                      rgba(17, 24, 39, 1) 30%,
                      rgba(17, 24, 39, 0) 100%
                    ),
                    url(${service.image})`,
            },

            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",

            transition: "transform 0.4s ease",
          },

          "&:hover::before": {
            transform: "scale(1.08)",
          },
          transition: "0.3s ease",

          "&:hover": {
            transform: "translateY(-5px)",
          },
        }}
      >
        <Box
          sx={{
            zIndex: 100,
            width: { xs: "100%", md: "40%" },
            position: "relative",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              color: "background.default",
              position: "relative",
              "&::after": {
                position: "absolute",
                content: '""',
                bottom: -10,
                left: 0,
                width: 50,
                height: 3,
                bgcolor: "primary.main",
              },
            }}
          >
            {t("faq.cardTitle")}
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "background.default", mt: 3, fontSize: 14 }}
          >
            {t("faq.cardDesc")}
          </Typography>
          <Box sx={{display: "flex", flexDirection: "column", gap: 2, mt: 3}}>
            <Button
              variant="contained"
              sx={{
                width: "150px",
                height: "50px",
                color: "background.default",
              }}
              endIcon={<East />}
            >
              {t("hero.quoteBtn")}
            </Button>
            <Button
              variant="outlined"
              sx={{
                width: "150px",
                height: "50px",
                color: "background.default",
                borderColor: "background.default",
              }}
              endIcon={<East />}
            >
              {t("hero.contactBtn")}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FAQs;
