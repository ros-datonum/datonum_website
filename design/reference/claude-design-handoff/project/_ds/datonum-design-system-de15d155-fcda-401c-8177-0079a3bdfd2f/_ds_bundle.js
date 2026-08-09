/* @ds-bundle: {"format":4,"namespace":"DatonumDesignSystem_de15d1","components":[{"name":"Accordion","sourcePath":"components/content/Accordion.jsx"},{"name":"BarChart","sourcePath":"components/content/BarChart.jsx"},{"name":"CTABanner","sourcePath":"components/content/CTABanner.jsx"},{"name":"ChecklistItem","sourcePath":"components/content/ChecklistItem.jsx"},{"name":"DataTable","sourcePath":"components/content/DataTable.jsx"},{"name":"PriceCard","sourcePath":"components/content/PriceCard.jsx"},{"name":"Quote","sourcePath":"components/content/Quote.jsx"},{"name":"ScoreMeter","sourcePath":"components/content/ScoreMeter.jsx"},{"name":"SectionHeading","sourcePath":"components/content/SectionHeading.jsx"},{"name":"StatBlock","sourcePath":"components/content/StatBlock.jsx"},{"name":"Timeline","sourcePath":"components/content/Timeline.jsx"},{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Callout","sourcePath":"components/feedback/Callout.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"StepTracker","sourcePath":"components/navigation/StepTracker.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/content/Accordion.jsx":"63a8501e1080","components/content/BarChart.jsx":"b4819ecee8c8","components/content/CTABanner.jsx":"de9deb721adc","components/content/ChecklistItem.jsx":"9bbd440edbea","components/content/DataTable.jsx":"58c3d06a17d1","components/content/PriceCard.jsx":"3c2b2b2da327","components/content/Quote.jsx":"72e5f216e5d1","components/content/ScoreMeter.jsx":"ca2f1a7b63f5","components/content/SectionHeading.jsx":"ca0d9af8f153","components/content/StatBlock.jsx":"752fc7f292a9","components/content/Timeline.jsx":"d4d3750a9ce6","components/core/Avatar.jsx":"67703c0cef61","components/core/Badge.jsx":"0c0bc36519c5","components/core/Button.jsx":"5b57dee0ca54","components/core/Card.jsx":"e24a45913ddd","components/core/Divider.jsx":"b46d267c775c","components/core/Icon.jsx":"7df31c1d8b2e","components/core/IconButton.jsx":"ee434f356467","components/core/Logo.jsx":"d31a9bedf6bf","components/core/Tag.jsx":"5f16e836f54f","components/feedback/Callout.jsx":"4851116e0996","components/feedback/Dialog.jsx":"3b14e317fb9e","components/feedback/Toast.jsx":"0dce77a21a92","components/feedback/Tooltip.jsx":"4e711ac3c2bf","components/forms/Checkbox.jsx":"601a08b5045b","components/forms/Field.jsx":"b4e18098aaaf","components/forms/Input.jsx":"64942b376974","components/forms/Radio.jsx":"2f875533889a","components/forms/Select.jsx":"d80c34746ea5","components/forms/Switch.jsx":"148fda124428","components/forms/Textarea.jsx":"0bb9a3e7cfbe","components/navigation/Breadcrumb.jsx":"20115e07451a","components/navigation/StepTracker.jsx":"5d2ee262be7b","components/navigation/Tabs.jsx":"d141fd13dd6f","scraps/symbol-gen.js":"03ccfade0925","ui_kits/documents/AuditReport.jsx":"946f494be9c7","ui_kits/documents/OnePager.jsx":"ecdb5662fc08","ui_kits/documents/Page.jsx":"e0c90f122a7d","ui_kits/website/ApproachScreen.jsx":"9a47ba07e1f8","ui_kits/website/AuditScreen.jsx":"21b22d953b83","ui_kits/website/Chrome.jsx":"1ff5f19a0692","ui_kits/website/ContactScreen.jsx":"b85e947e3782","ui_kits/website/HomeScreen.jsx":"6aa57633edb2","ui_kits/website/ServicesScreen.jsx":"c9d32b9329e4"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DatonumDesignSystem_de15d1 = window.DatonumDesignSystem_de15d1 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/BarChart.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Horizontal bar chart — the opportunity matrix, hours saved, effort. Data in, bars out. */
function BarChart({
  data = [],
  valueSuffix = "",
  max,
  colorBy = "index",
  style,
  ...rest
}) {
  const top = max || Math.max(...data.map(d => Number(d.value) || 0), 1);
  const palette = ["var(--chart-1)", "var(--chart-2)", "var(--chart-3)", "var(--chart-4)", "var(--chart-5)", "var(--chart-6)"];
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)",
      ...style
    }
  }, rest), data.map((d, i) => {
    const colour = d.color || (colorBy === "index" ? palette[i % palette.length] : "var(--chart-1)");
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: "grid",
        gridTemplateColumns: "minmax(120px,26%) 1fr auto",
        gap: "var(--space-4)",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--font-sans)",
        fontSize: "var(--text-sm)",
        color: "var(--text-body)"
      }
    }, d.label), /*#__PURE__*/React.createElement("span", {
      style: {
        height: 22,
        background: "var(--surface-sunken)",
        borderRadius: "var(--radius-xs)",
        overflow: "hidden",
        display: "block"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "block",
        height: "100%",
        width: `${Number(d.value) / top * 100}%`,
        background: colour,
        borderRadius: "var(--radius-xs)",
        transition: "width var(--duration-slow) var(--ease-standard)"
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--type-data)",
        color: "var(--text-strong)",
        fontVariantNumeric: "tabular-nums",
        minWidth: 52,
        textAlign: "right"
      }
    }, d.value, valueSuffix));
  }));
}
Object.assign(__ds_scope, { BarChart });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/BarChart.jsx", error: String((e && e.message) || e) }); }

// components/content/DataTable.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function DataTable({
  columns = [],
  rows = [],
  dense = false,
  style,
  ...rest
}) {
  const pad = dense ? "8px 12px" : "12px 16px";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-card)",
      overflow: "hidden",
      background: "var(--surface-card)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map(c => {
    const key = typeof c === "string" ? c : c.key;
    const label = typeof c === "string" ? c : c.label;
    const align = typeof c === "object" && c.align || "left";
    return /*#__PURE__*/React.createElement("th", {
      key: key,
      style: {
        textAlign: align,
        padding: pad,
        font: "var(--type-eyebrow)",
        letterSpacing: "var(--tracking-label)",
        textTransform: "uppercase",
        color: "var(--text-muted)",
        background: "var(--surface-sunken)",
        borderBottom: "1px solid var(--border-subtle)",
        whiteSpace: "nowrap"
      }
    }, label);
  }))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: i
  }, columns.map(c => {
    const key = typeof c === "string" ? c : c.key;
    const align = typeof c === "object" && c.align || "left";
    const numeric = typeof c === "object" && c.numeric || false;
    return /*#__PURE__*/React.createElement("td", {
      key: key,
      style: {
        textAlign: align,
        padding: pad,
        borderBottom: i === rows.length - 1 ? "none" : "1px solid var(--border-subtle)",
        font: numeric ? "var(--type-data)" : "var(--font-sans)",
        fontSize: "var(--text-sm)",
        color: "var(--text-body)",
        fontVariantNumeric: numeric ? "tabular-nums" : "normal"
      }
    }, r[key]);
  }))))));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/content/Quote.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Quote({
  children,
  attribution,
  role,
  tone = "light",
  style,
  ...rest
}) {
  const ink = tone === "ink";
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)",
      borderLeft: "2px solid " + (ink ? "var(--teal-500)" : "var(--teal-600)"),
      paddingLeft: "var(--space-6)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      font: "var(--type-quote)",
      letterSpacing: "var(--tracking-heading)",
      color: ink ? "var(--white)" : "var(--text-strong)",
      maxWidth: "38ch",
      textWrap: "pretty"
    }
  }, children), (attribution || role) && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, attribution && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--weight-semibold) var(--text-sm)/1.3 var(--font-sans)",
      color: ink ? "var(--white)" : "var(--text-strong)"
    }
  }, attribution), role && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--font-sans)",
      fontSize: "var(--text-xs)",
      color: ink ? "var(--text-inverse-muted)" : "var(--text-muted)"
    }
  }, role)));
}
Object.assign(__ds_scope, { Quote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Quote.jsx", error: String((e && e.message) || e) }); }

// components/content/ScoreMeter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ScoreMeter({
  label,
  value = 0,
  max = 5,
  detail,
  tone = "auto",
  showValue = true,
  style,
  ...rest
}) {
  const pct = Math.max(0, Math.min(1, value / max));
  const auto = pct >= 0.7 ? "var(--teal-600)" : pct >= 0.4 ? "var(--amber-600)" : "var(--red-600)";
  const colour = tone === "auto" ? auto : {
    positive: "var(--teal-600)",
    caution: "var(--amber-600)",
    negative: "var(--red-600)",
    neutral: "var(--navy-500)"
  }[tone];
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--weight-semibold) var(--text-sm)/1.3 var(--font-sans)",
      color: "var(--text-strong)"
    }
  }, label), showValue && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-data)",
      color: "var(--text-muted)",
      fontVariantNumeric: "tabular-nums"
    }
  }, value, " / ", max)), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      borderRadius: "var(--radius-pill)",
      background: "var(--surface-sunken)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${pct * 100}%`,
      height: "100%",
      borderRadius: "var(--radius-pill)",
      background: colour,
      transition: "width var(--duration-slow) var(--ease-standard)"
    }
  })), detail && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--font-sans)",
      fontSize: "var(--text-xs)",
      lineHeight: "var(--leading-normal)",
      color: "var(--text-muted)"
    }
  }, detail));
}
Object.assign(__ds_scope, { ScoreMeter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ScoreMeter.jsx", error: String((e && e.message) || e) }); }

// components/content/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  tone = "light",
  level = "h2",
  style,
  ...rest
}) {
  const Tag = level;
  const inverse = tone === "ink";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)",
      alignItems: align === "center" ? "center" : "flex-start",
      textAlign: align,
      maxWidth: align === "center" ? "var(--measure-prose)" : "none",
      marginInline: align === "center" ? "auto" : undefined,
      ...style
    }
  }, rest), eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: inverse ? "var(--teal-500)" : "var(--teal-700)"
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement(Tag, {
    style: {
      font: level === "h1" ? "var(--type-h1)" : "var(--type-h2)",
      letterSpacing: "var(--tracking-heading)",
      color: inverse ? "var(--white)" : "var(--text-strong)",
      margin: 0,
      maxWidth: "20ch"
    }
  }, title), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-lg)",
      color: inverse ? "var(--text-inverse-muted)" : "var(--text-body)",
      maxWidth: "var(--measure-prose)",
      margin: 0,
      textWrap: "pretty"
    }
  }, lead));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/content/StatBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function StatBlock({
  value,
  label,
  detail,
  tone = "light",
  align = "left",
  style,
  ...rest
}) {
  const inverse = tone === "ink";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      textAlign: align,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--weight-light) var(--text-display-2)/1 var(--font-display)",
      letterSpacing: "var(--tracking-display)",
      color: inverse ? "var(--white)" : "var(--text-strong)",
      fontVariantNumeric: "tabular-nums"
    }
  }, value), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--weight-semibold) var(--text-sm)/1.3 var(--font-sans)",
      color: inverse ? "var(--white)" : "var(--text-strong)"
    }
  }, label), detail && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--font-sans)",
      fontSize: "var(--text-xs)",
      lineHeight: "var(--leading-normal)",
      color: inverse ? "var(--text-inverse-muted)" : "var(--text-muted)"
    }
  }, detail));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/content/Timeline.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Timeline({
  items = [],
  tone = "light",
  style,
  ...rest
}) {
  const ink = tone === "ink";
  return /*#__PURE__*/React.createElement("ol", _extends({
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "grid",
      gridTemplateColumns: `repeat(${items.length},1fr)`,
      ...style
    }
  }, rest), items.map((it, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      position: "relative",
      paddingTop: "var(--space-6)",
      paddingRight: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: 2,
      background: ink ? "var(--alpha-hairline-inverse)" : "var(--border-subtle)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: -4,
      left: 0,
      width: 10,
      height: 10,
      borderRadius: "var(--radius-pill)",
      background: i === 0 ? "var(--teal-600)" : ink ? "var(--navy-400)" : "var(--grey-300)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      font: "var(--type-data)",
      color: ink ? "var(--teal-500)" : "var(--teal-700)"
    }
  }, it.when), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      font: "var(--weight-semibold) var(--text-sm)/1.35 var(--font-sans)",
      color: ink ? "var(--white)" : "var(--text-strong)",
      marginTop: 6
    }
  }, it.title), it.detail && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      font: "var(--font-sans)",
      fontSize: "var(--text-xs)",
      lineHeight: "var(--leading-normal)",
      color: ink ? "var(--text-inverse-muted)" : "var(--text-muted)",
      marginTop: 4
    }
  }, it.detail))));
}
Object.assign(__ds_scope, { Timeline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Timeline.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Badge({
  tone = "neutral",
  children,
  style,
  ...rest
}) {
  const tones = {
    neutral: {
      background: "var(--grey-100)",
      color: "var(--grey-600)"
    },
    navy: {
      background: "var(--navy-100)",
      color: "var(--navy-800)"
    },
    positive: {
      background: "var(--teal-100)",
      color: "var(--teal-700)"
    },
    caution: {
      background: "var(--amber-100)",
      color: "var(--amber-700)"
    },
    negative: {
      background: "var(--red-100)",
      color: "var(--red-700)"
    },
    inverse: {
      background: "rgba(255,255,255,.14)",
      color: "var(--white)"
    }
  }[tone];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      padding: "4px 9px",
      borderRadius: "var(--radius-xs)",
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      ...tones,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "var(--space-2)",
  font: "var(--weight-semibold) var(--text-sm)/1 var(--font-sans)",
  letterSpacing: "0.01em",
  borderRadius: "var(--radius-control)",
  border: "1px solid transparent",
  cursor: "pointer",
  textDecoration: "none",
  transition: "var(--transition-control)",
  whiteSpace: "nowrap"
};
const sizes = {
  sm: {
    padding: "7px 14px",
    fontSize: "var(--text-xs)"
  },
  md: {
    padding: "10px 18px"
  },
  lg: {
    padding: "14px 26px",
    fontSize: "var(--text-body)"
  }
};
const variants = {
  primary: {
    background: "var(--action-primary)",
    color: "var(--action-primary-text)",
    borderColor: "var(--action-primary)"
  },
  accent: {
    background: "var(--action-accent)",
    color: "var(--white)",
    borderColor: "var(--action-accent)"
  },
  secondary: {
    background: "var(--surface-card)",
    color: "var(--text-strong)",
    borderColor: "var(--action-secondary-border)"
  },
  ghost: {
    background: "transparent",
    color: "var(--text-strong)",
    borderColor: "transparent"
  },
  inverse: {
    background: "var(--white)",
    color: "var(--navy-800)",
    borderColor: "var(--white)"
  },
  "inverse-outline": {
    background: "transparent",
    color: "var(--white)",
    borderColor: "rgba(255,255,255,.4)"
  }
};
const hovers = {
  primary: {
    background: "var(--action-primary-hover)",
    borderColor: "var(--action-primary-hover)"
  },
  accent: {
    background: "var(--action-accent-hover)",
    borderColor: "var(--action-accent-hover)"
  },
  secondary: {
    background: "var(--action-secondary-hover)",
    borderColor: "var(--border-strong)"
  },
  ghost: {
    background: "var(--surface-sunken)"
  },
  inverse: {
    background: "var(--navy-050)",
    borderColor: "var(--navy-050)"
  },
  "inverse-outline": {
    background: "rgba(255,255,255,.10)",
    borderColor: "rgba(255,255,255,.7)"
  }
};
function Button({
  variant = "primary",
  size = "md",
  disabled = false,
  fullWidth = false,
  href,
  type = "button",
  children,
  style,
  onClick,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const s = {
    ...base,
    ...sizes[size],
    ...variants[variant],
    ...(hover && !disabled ? hovers[variant] : null),
    ...(press && !disabled ? {
      transform: "translateY(1px)"
    } : null),
    ...(fullWidth ? {
      width: "100%"
    } : null),
    ...(disabled ? {
      opacity: .45,
      cursor: "not-allowed"
    } : null),
    ...style
  };
  const handlers = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false)
  };
  if (href && !disabled) return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    style: s,
    onClick: onClick
  }, handlers, rest), children);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    style: s,
    onClick: onClick
  }, handlers, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/content/CTABanner.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function CTABanner({
  eyebrow = "Next step",
  title,
  lead,
  action = "Book a 30-minute call",
  onAction,
  tone = "ink",
  style,
  ...rest
}) {
  const ink = tone === "ink";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--space-12)",
      padding: "var(--space-10) var(--space-10)",
      borderRadius: "var(--radius-panel)",
      background: ink ? "var(--surface-ink)" : "var(--surface-sunken)",
      backgroundImage: ink ? "radial-gradient(110% 140% at 92% 0%, var(--alpha-glow-teal) 0%, rgba(10,37,64,0) 62%)" : "none",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: ink ? "var(--teal-500)" : "var(--teal-700)"
    }
  }, eyebrow), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-h2)",
      letterSpacing: "var(--tracking-heading)",
      color: ink ? "var(--white)" : "var(--text-strong)",
      maxWidth: "22ch",
      textWrap: "pretty"
    }
  }, title), lead && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-lg)",
      color: ink ? "var(--text-inverse-muted)" : "var(--text-body)"
    }
  }, lead)), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "lg",
    variant: ink ? "inverse" : "primary",
    onClick: onAction,
    style: {
      flex: "0 0 auto"
    }
  }, action));
}
Object.assign(__ds_scope, { CTABanner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/CTABanner.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  tone = "default",
  interactive = false,
  padding = "var(--pad-card)",
  children,
  style,
  onClick,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const tones = {
    default: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      color: "var(--text-body)"
    },
    sunken: {
      background: "var(--surface-sunken)",
      border: "1px solid transparent",
      color: "var(--text-body)"
    },
    accent: {
      background: "var(--surface-accent-soft)",
      border: "1px solid var(--teal-100)",
      color: "var(--text-body)"
    },
    caution: {
      background: "var(--surface-caution-soft)",
      border: "1px solid #EFDCBA",
      color: "var(--text-body)"
    },
    ink: {
      background: "var(--surface-ink)",
      border: "1px solid var(--border-ink)",
      color: "var(--text-inverse-muted)"
    }
  }[tone];
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      borderRadius: "var(--radius-card)",
      padding,
      transition: "var(--transition-control), transform var(--duration-base) var(--ease-standard)",
      boxShadow: interactive && hover ? "var(--shadow-md)" : "var(--shadow-sm)",
      cursor: interactive ? "pointer" : "default",
      ...tones,
      ...(interactive && hover ? {
        borderColor: tone === "ink" ? "rgba(255,255,255,.3)" : "var(--border-strong)"
      } : null),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Divider({
  label,
  tone = "light",
  spacing = "var(--space-8)",
  style,
  ...rest
}) {
  const line = tone === "ink" ? "var(--alpha-hairline-inverse)" : "var(--border-subtle)";
  if (!label) return /*#__PURE__*/React.createElement("hr", _extends({
    style: {
      border: "none",
      borderTop: "1px solid " + line,
      margin: `${spacing} 0`,
      ...style
    }
  }, rest));
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)",
      margin: `${spacing} 0`,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: tone === "ink" ? "var(--navy-300)" : "var(--text-muted)",
      whiteSpace: "nowrap"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: line
    }
  }));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Lucide (CDN, lucide-static) rendered as a CSS mask so it inherits currentColor. */
function Icon({
  name = "arrow-right",
  size = 18,
  color = "currentColor",
  strokeWidth,
  style,
  ...rest
}) {
  const url = `https://unpkg.com/lucide-static@0.454.0/icons/${name}.svg`;
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true",
    style: {
      display: "inline-block",
      width: size,
      height: size,
      flex: "0 0 auto",
      backgroundColor: color,
      WebkitMaskImage: `url(${url})`,
      maskImage: `url(${url})`,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskSize: "contain",
      maskSize: "contain",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/content/Accordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Accordion({
  items = [],
  defaultOpen = 0,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderTop: "1px solid var(--border-subtle)",
      ...style
    }
  }, rest), items.map((it, i) => {
    const isOpen = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderBottom: "1px solid var(--border-subtle)"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(isOpen ? -1 : i),
      "aria-expanded": isOpen,
      style: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "var(--space-4)",
        background: "none",
        border: "none",
        cursor: "pointer",
        textAlign: "left",
        padding: "var(--space-5) 0",
        font: "var(--type-h4)",
        color: "var(--text-strong)"
      }
    }, it.question, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--text-muted)",
        display: "flex",
        transform: isOpen ? "rotate(180deg)" : "none",
        transition: "transform var(--duration-base) var(--ease-standard)"
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "chevron-down",
      size: 18
    }))), isOpen && /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "0 0 var(--space-5)",
        maxWidth: "var(--measure-prose)",
        font: "var(--type-body)",
        color: "var(--text-body)"
      }
    }, it.answer));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/content/ChecklistItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ChecklistItem({
  tone = "included",
  title,
  children,
  style,
  ...rest
}) {
  const map = {
    included: {
      icon: "check",
      colour: "var(--teal-600)"
    },
    excluded: {
      icon: "x",
      colour: "var(--grey-400)"
    },
    caution: {
      icon: "minus",
      colour: "var(--amber-600)"
    }
  }[tone];
  return /*#__PURE__*/React.createElement("li", _extends({
    style: {
      display: "flex",
      gap: "var(--space-3)",
      alignItems: "flex-start",
      listStyle: "none",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      color: map.colour,
      display: "flex",
      marginTop: 3
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: map.icon,
    size: 16
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--font-sans)",
      fontSize: "var(--text-sm)",
      lineHeight: "var(--leading-relaxed)",
      color: "var(--text-body)"
    }
  }, title && /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--text-strong)",
      fontWeight: "var(--weight-semibold)"
    }
  }, title, " "), children));
}
Object.assign(__ds_scope, { ChecklistItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ChecklistItem.jsx", error: String((e && e.message) || e) }); }

// components/content/PriceCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function PriceCard({
  tier,
  summary,
  price,
  priceNote,
  features = [],
  featured = false,
  cta = "Book a call",
  onCta,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)",
      padding: "var(--pad-card-lg)",
      background: featured ? "var(--surface-ink)" : "var(--surface-card)",
      border: "1px solid " + (featured ? "var(--surface-ink)" : "var(--border-subtle)"),
      borderRadius: "var(--radius-card)",
      boxShadow: featured ? "var(--shadow-lg)" : "var(--shadow-sm)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-h3)",
      color: featured ? "var(--white)" : "var(--text-strong)"
    }
  }, tier), featured && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "inverse"
  }, "Most chosen")), summary && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "var(--font-sans)",
      fontSize: "var(--text-sm)",
      lineHeight: "var(--leading-relaxed)",
      color: featured ? "var(--text-inverse-muted)" : "var(--text-body)"
    }
  }, summary), price && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2,
      paddingTop: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--weight-light) var(--text-h1)/1 var(--font-display)",
      color: featured ? "var(--white)" : "var(--text-strong)",
      fontVariantNumeric: "tabular-nums"
    }
  }, price), priceNote && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--font-sans)",
      fontSize: "var(--text-xs)",
      color: featured ? "var(--text-inverse-muted)" : "var(--text-muted)"
    }
  }, priceNote)), features.length > 0 && /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      display: "grid",
      gap: "var(--space-3)",
      borderTop: "1px solid " + (featured ? "var(--border-ink)" : "var(--border-subtle)"),
      paddingTop: "var(--space-5)"
    }
  }, features.map((x, i) => /*#__PURE__*/React.createElement(__ds_scope.ChecklistItem, {
    key: i,
    style: featured ? {
      color: "var(--text-inverse-muted)"
    } : null
  }, x))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      paddingTop: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    fullWidth: true,
    variant: featured ? "inverse" : "secondary",
    onClick: onCta
  }, cta)));
}
Object.assign(__ds_scope, { PriceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PriceCard.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  name = "x",
  label,
  size = "md",
  variant = "ghost",
  onClick,
  disabled = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const dims = {
    sm: 30,
    md: 38,
    lg: 44
  }[size];
  const variants = {
    ghost: {
      background: hover ? "var(--surface-sunken)" : "transparent",
      color: "var(--text-strong)",
      borderColor: "transparent"
    },
    outline: {
      background: hover ? "var(--surface-sunken)" : "var(--surface-card)",
      color: "var(--text-strong)",
      borderColor: "var(--border-strong)"
    },
    solid: {
      background: hover ? "var(--action-primary-hover)" : "var(--action-primary)",
      color: "var(--white)",
      borderColor: "transparent"
    },
    inverse: {
      background: hover ? "rgba(255,255,255,.12)" : "transparent",
      color: "var(--white)",
      borderColor: "rgba(255,255,255,.28)"
    }
  }[variant];
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: dims,
      height: dims,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--radius-control)",
      border: "1px solid",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? .45 : 1,
      transition: "var(--transition-control)",
      ...variants,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: name,
    size: size === "sm" ? 15 : 18
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Rising matrix: three columns of one, two and three blocks, stepping up.
   64-unit grid — columns x9/26/43, rows y42/26/10, blocks 12×12 r2. Ink 46×44 at y10.
   Keep this geometry identical to assets/logo/*.svg. */
/* Navy blocks; the first block carries teal, the summit carries brass. */
const BLOCKS = [[26, 42], [26, 26], [43, 42], [43, 26]];
const FIRST = [9, 42];
const SUMMIT = [43, 10];
const RATIO = 46 / 44;
/* One construction ratio for the identity: mark ink height = 1.4 x wordmark cap height.
   DM Sans 500 cap = 0.70 of font-size, and font-size here is 0.86 x the nominal height,
   so the mark is 1.4 x 0.70 x 0.86 = 0.843 x height. Must match assets/logo/*.svg. */
const FONT_OF_HEIGHT = 0.86,
  CAP_OF_FONT = 0.70,
  MARK_TO_CAP = 1.4;
const MARK_OF_HEIGHT = FONT_OF_HEIGHT * CAP_OF_FONT * MARK_TO_CAP;
function Mark({
  height = 32,
  color = "var(--navy-800)",
  summit = "var(--brass-600)",
  first = "var(--teal-600)"
}) {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "9 10 46 44",
    width: height * RATIO,
    height: height,
    role: "img",
    "aria-label": "Datonum",
    style: {
      display: "block",
      flex: "0 0 auto",
      overflow: "visible"
    }
  }, BLOCKS.map(([x, y]) => /*#__PURE__*/React.createElement("rect", {
    key: `${x}-${y}`,
    x: x,
    y: y,
    width: "12",
    height: "12",
    rx: "2",
    fill: color
  })), /*#__PURE__*/React.createElement("rect", {
    x: FIRST[0],
    y: FIRST[1],
    width: "12",
    height: "12",
    rx: "2",
    fill: first
  }), /*#__PURE__*/React.createElement("rect", {
    x: SUMMIT[0],
    y: SUMMIT[1],
    width: "12",
    height: "12",
    rx: "2",
    fill: summit
  }));
}
function Logo({
  variant = "lockup",
  tone = "navy",
  height = 28,
  mono = false,
  style,
  ...rest
}) {
  const inverse = tone === "white";
  const colour = inverse ? "var(--white)" : "var(--navy-800)";
  /* Two accents, one at each end of the climb: teal on the first block, brass on the summit.
     `mono` collapses both to the base ink for engraving and one-plate print. */
  const summit = mono ? colour : inverse ? "var(--brass-500)" : "var(--brass-600)";
  const first = mono ? colour : inverse ? "var(--teal-500)" : "var(--teal-600)";
  if (variant === "mark") return /*#__PURE__*/React.createElement(Mark, {
    height: height,
    color: colour,
    summit: summit,
    first: first
  });
  if (variant === "tile") {
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        width: height,
        height: height,
        borderRadius: height * 0.22,
        background: "var(--navy-800)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flex: "0 0 auto",
        ...style
      }
    }, rest), /*#__PURE__*/React.createElement(Mark, {
      height: height * 0.58,
      color: "var(--white)",
      summit: mono ? "var(--white)" : "var(--brass-500)",
      first: mono ? "var(--white)" : "var(--teal-500)"
    }));
  }
  const word = /*#__PURE__*/React.createElement("span", {
    style: {
      font: `var(--weight-medium) ${height * FONT_OF_HEIGHT}px/1 var(--font-display)`,
      letterSpacing: "-0.01em",
      color: colour,
      whiteSpace: "nowrap"
    }
  }, "Datonum");
  if (variant === "wordmark") return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      ...style
    }
  }, rest), word);
  if (variant === "stacked") {
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
        gap: height * 0.34,
        ...style
      }
    }, rest), /*#__PURE__*/React.createElement(Mark, {
      height: height * MARK_OF_HEIGHT,
      color: colour,
      summit: summit,
      first: first
    }), word);
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: height * 0.4,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(Mark, {
    height: height * MARK_OF_HEIGHT,
    color: colour,
    summit: summit,
    first: first
  }), word);
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Avatar({
  name,
  src,
  size = 40,
  tone = "navy",
  style,
  ...rest
}) {
  const initials = (name || "").split(" ").filter(Boolean).slice(0, 2).map(w => w[0]).join("").toUpperCase();
  if (src) return /*#__PURE__*/React.createElement("img", _extends({
    src: src,
    alt: name || "",
    style: {
      width: size,
      height: size,
      borderRadius: "var(--radius-pill)",
      objectFit: "cover",
      display: "block",
      flex: "0 0 auto",
      ...style
    }
  }, rest));
  if (!name) return /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    variant: "tile",
    height: size,
    style: style
  });
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-label": name,
    style: {
      width: size,
      height: size,
      borderRadius: "var(--radius-pill)",
      flex: "0 0 auto",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: tone === "teal" ? "var(--teal-100)" : "var(--navy-100)",
      color: tone === "teal" ? "var(--teal-700)" : "var(--navy-800)",
      font: `var(--weight-semibold) ${Math.round(size * 0.36)}px/1 var(--font-sans)`,
      ...style
    }
  }, rest), initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  selected = false,
  onRemove,
  onClick,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      padding: "5px 12px",
      borderRadius: "var(--radius-pill)",
      font: "var(--weight-medium) var(--text-xs)/1.2 var(--font-sans)",
      background: selected ? "var(--navy-800)" : hover && onClick ? "var(--grey-100)" : "var(--surface-card)",
      color: selected ? "var(--white)" : "var(--text-body)",
      border: "1px solid " + (selected ? "var(--navy-800)" : "var(--border-strong)"),
      cursor: onClick ? "pointer" : "default",
      transition: "var(--transition-control)",
      ...style
    }
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    },
    style: {
      display: "inline-flex",
      cursor: "pointer",
      opacity: .6
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 12
  })));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Callout.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Callout({
  tone = "info",
  title,
  icon,
  children,
  style,
  ...rest
}) {
  const tones = {
    info: {
      bg: "var(--navy-050)",
      border: "var(--navy-100)",
      fg: "var(--navy-800)",
      icon: "info"
    },
    accent: {
      bg: "var(--teal-050)",
      border: "var(--teal-100)",
      fg: "var(--teal-700)",
      icon: "lightbulb"
    },
    caution: {
      bg: "var(--amber-100)",
      border: "#EFDCBA",
      fg: "var(--amber-700)",
      icon: "triangle-alert"
    },
    negative: {
      bg: "var(--red-100)",
      border: "#EFD2CD",
      fg: "var(--red-700)",
      icon: "octagon-alert"
    }
  }[tone];
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      gap: "var(--space-3)",
      padding: "var(--space-4)",
      background: tones.bg,
      border: "1px solid " + tones.border,
      borderRadius: "var(--radius-card)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      color: tones.fg,
      display: "flex",
      marginTop: 1
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon || tones.icon,
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--weight-semibold) var(--text-sm)/1.35 var(--font-sans)",
      color: tones.fg
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--font-sans)",
      fontSize: "var(--text-sm)",
      lineHeight: "var(--leading-normal)",
      color: "var(--text-body)"
    }
  }, children)));
}
Object.assign(__ds_scope, { Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Callout.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Dialog({
  open = false,
  title,
  description,
  onClose,
  footer,
  width = 520,
  children,
  style,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 60,
      background: "rgba(6,23,38,.45)",
      backdropFilter: "blur(2px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "var(--space-6)",
      animation: "none"
    }
  }, /*#__PURE__*/React.createElement("div", _extends({
    onClick: e => e.stopPropagation(),
    style: {
      width: "100%",
      maxWidth: width,
      background: "var(--surface-card)",
      borderRadius: "var(--radius-panel)",
      boxShadow: "var(--shadow-overlay)",
      overflow: "hidden",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: "var(--space-4)",
      padding: "var(--space-6) var(--space-6) var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, title && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-h3)",
      color: "var(--text-strong)"
    }
  }, title), description && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--font-sans)",
      fontSize: "var(--text-sm)",
      lineHeight: "var(--leading-normal)",
      color: "var(--text-muted)"
    }
  }, description)), onClose && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    name: "x",
    label: "Close",
    onClick: onClose
  })), children && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 var(--space-6) var(--space-6)"
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: "var(--space-3)",
      padding: "var(--space-4) var(--space-6)",
      background: "var(--surface-sunken)",
      borderTop: "1px solid var(--border-subtle)"
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Toast({
  tone = "neutral",
  title,
  message,
  onDismiss,
  style,
  ...rest
}) {
  const colour = {
    neutral: "var(--navy-200)",
    positive: "var(--teal-500)",
    caution: "var(--amber-600)",
    negative: "var(--red-600)"
  }[tone];
  const icon = {
    neutral: "info",
    positive: "circle-check",
    caution: "triangle-alert",
    negative: "octagon-alert"
  }[tone];
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: "var(--space-3)",
      minWidth: 300,
      maxWidth: 420,
      padding: "var(--space-4)",
      background: "var(--surface-ink)",
      color: "var(--white)",
      borderRadius: "var(--radius-card)",
      boxShadow: "var(--shadow-overlay)",
      border: "1px solid var(--border-ink)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      color: colour,
      display: "flex",
      marginTop: 1
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, title && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--weight-semibold) var(--text-sm)/1.35 var(--font-sans)",
      color: "var(--white)"
    }
  }, title), message && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--font-sans)",
      fontSize: "var(--text-xs)",
      lineHeight: "var(--leading-normal)",
      color: "var(--text-inverse-muted)"
    }
  }, message)), onDismiss && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    name: "x",
    label: "Dismiss",
    size: "sm",
    variant: "inverse",
    onClick: onDismiss
  }));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tooltip({
  label,
  placement = "top",
  children,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(false);
  const pos = placement === "top" ? {
    bottom: "calc(100% + 8px)",
    left: "50%",
    transform: "translateX(-50%)"
  } : {
    top: "calc(100% + 8px)",
    left: "50%",
    transform: "translateX(-50%)"
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: "relative",
      display: "inline-flex",
      ...style
    },
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false),
    onFocus: () => setOpen(true),
    onBlur: () => setOpen(false)
  }, rest), children, open && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: "absolute",
      ...pos,
      zIndex: 50,
      whiteSpace: "nowrap",
      background: "var(--navy-900)",
      color: "var(--white)",
      font: "var(--font-sans)",
      fontSize: "var(--text-xs)",
      padding: "6px 10px",
      borderRadius: "var(--radius-xs)",
      boxShadow: "var(--shadow-lg)",
      pointerEvents: "none"
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  checked = false,
  onChange,
  label,
  description,
  disabled = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: "flex",
      gap: "var(--space-3)",
      alignItems: "flex-start",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? .5 : 1,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: 18,
      height: 18,
      flex: "0 0 auto",
      marginTop: 1,
      borderRadius: "var(--radius-xs)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: checked ? "var(--navy-800)" : "var(--surface-card)",
      border: "1px solid " + (checked ? "var(--navy-800)" : "var(--border-strong)"),
      color: "var(--white)",
      transition: "var(--transition-control)"
    }
  }, checked && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 13
  })), (label || description) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--font-sans)",
      fontSize: "var(--text-sm)",
      color: "var(--text-strong)"
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--font-sans)",
      fontSize: "var(--text-xs)",
      color: "var(--text-muted)"
    }
  }, description)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Field({
  label,
  hint,
  error,
  required = false,
  htmlFor,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      ...style
    }
  }, rest), label && /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      font: "var(--type-label)",
      color: "var(--text-strong)"
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--status-negative)",
      marginLeft: 4
    }
  }, "*")), children, error ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-small)",
      fontSize: "var(--text-xs)",
      color: "var(--status-negative)"
    }
  }, error) : hint && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-small)",
      fontSize: "var(--text-xs)",
      color: "var(--text-muted)"
    }
  }, hint));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  value,
  defaultValue,
  onChange,
  placeholder,
  type = "text",
  disabled = false,
  error = false,
  icon,
  size = "md",
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const pad = size === "sm" ? "7px 10px" : "10px 12px";
  const field = /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: "100%",
      font: "var(--font-sans)",
      fontSize: size === "sm" ? "var(--text-xs)" : "var(--text-sm)",
      color: "var(--text-strong)",
      background: disabled ? "var(--surface-sunken)" : "var(--surface-card)",
      border: "1px solid " + (error ? "var(--status-negative)" : focus ? "var(--border-focus)" : "var(--border-strong)"),
      borderRadius: "var(--radius-control)",
      padding: icon ? "10px 12px 10px 36px" : pad,
      outline: "none",
      boxShadow: focus ? "var(--ring-focus)" : "none",
      transition: "var(--transition-control)",
      ...(icon ? null : style)
    }
  }, rest));
  if (!icon) return field;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "block",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 12,
      top: "50%",
      transform: "translateY(-50%)",
      color: "var(--text-muted)",
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16
  })), field);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  checked = false,
  onChange,
  label,
  description,
  name,
  disabled = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: "flex",
      gap: "var(--space-3)",
      alignItems: "flex-start",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? .5 : 1,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: name,
    checked: checked,
    onChange: () => onChange && onChange(true),
    disabled: disabled,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      flex: "0 0 auto",
      marginTop: 1,
      borderRadius: "var(--radius-pill)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--surface-card)",
      border: "1px solid " + (checked ? "var(--navy-800)" : "var(--border-strong)"),
      transition: "var(--transition-control)"
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: "var(--radius-pill)",
      background: "var(--navy-800)"
    }
  })), (label || description) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--font-sans)",
      fontSize: "var(--text-sm)",
      color: "var(--text-strong)"
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--font-sans)",
      fontSize: "var(--text-xs)",
      color: "var(--text-muted)"
    }
  }, description)));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  value,
  defaultValue,
  onChange,
  options = [],
  placeholder,
  disabled = false,
  error = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "block",
      ...style
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: "100%",
      appearance: "none",
      font: "var(--font-sans)",
      fontSize: "var(--text-sm)",
      color: "var(--text-strong)",
      background: disabled ? "var(--surface-sunken)" : "var(--surface-card)",
      border: "1px solid " + (error ? "var(--status-negative)" : focus ? "var(--border-focus)" : "var(--border-strong)"),
      borderRadius: "var(--radius-control)",
      padding: "10px 36px 10px 12px",
      outline: "none",
      boxShadow: focus ? "var(--ring-focus)" : "none",
      transition: "var(--transition-control)",
      cursor: "pointer"
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), options.map(o => {
    const v = typeof o === "string" ? o : o.value;
    const l = typeof o === "string" ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: 12,
      top: "50%",
      transform: "translateY(-50%)",
      color: "var(--text-muted)",
      display: "flex",
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 16
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  checked = false,
  onChange,
  label,
  disabled = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: "inline-flex",
      gap: "var(--space-3)",
      alignItems: "center",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? .5 : 1,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: 38,
      height: 22,
      borderRadius: "var(--radius-pill)",
      padding: 2,
      display: "inline-flex",
      alignItems: "center",
      background: checked ? "var(--teal-600)" : "var(--grey-300)",
      transition: "background-color var(--duration-base) var(--ease-standard)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      borderRadius: "var(--radius-pill)",
      background: "var(--white)",
      boxShadow: "var(--shadow-sm)",
      transform: checked ? "translateX(16px)" : "translateX(0)",
      transition: "transform var(--duration-base) var(--ease-standard)"
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--font-sans)",
      fontSize: "var(--text-sm)",
      color: "var(--text-strong)"
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Textarea({
  value,
  defaultValue,
  onChange,
  placeholder,
  rows = 4,
  disabled = false,
  error = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("textarea", _extends({
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    placeholder: placeholder,
    rows: rows,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: "100%",
      font: "var(--font-sans)",
      fontSize: "var(--text-sm)",
      lineHeight: "var(--leading-normal)",
      color: "var(--text-strong)",
      background: disabled ? "var(--surface-sunken)" : "var(--surface-card)",
      resize: "vertical",
      border: "1px solid " + (error ? "var(--status-negative)" : focus ? "var(--border-focus)" : "var(--border-strong)"),
      borderRadius: "var(--radius-control)",
      padding: "10px 12px",
      outline: "none",
      boxShadow: focus ? "var(--ring-focus)" : "none",
      transition: "var(--transition-control)",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Breadcrumb({
  items = [],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    "aria-label": "Breadcrumb",
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-2)",
      flexWrap: "wrap",
      ...style
    }
  }, rest), items.map((it, i) => {
    const last = i === items.length - 1;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, last ? /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--font-sans)",
        fontSize: "var(--text-xs)",
        color: "var(--text-strong)",
        fontWeight: "var(--weight-medium)"
      }
    }, it.label) : /*#__PURE__*/React.createElement("a", {
      href: it.href || "#",
      style: {
        font: "var(--font-sans)",
        fontSize: "var(--text-xs)",
        color: "var(--text-muted)",
        borderBottom: "none"
      }
    }, it.label), !last && /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--grey-300)",
        display: "flex"
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "chevron-right",
      size: 13
    })));
  }));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/StepTracker.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function StepTracker({
  steps = [],
  current = 0,
  orientation = "vertical",
  style,
  ...rest
}) {
  const vertical = orientation === "vertical";
  return /*#__PURE__*/React.createElement("ol", _extends({
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: vertical ? "column" : "row",
      gap: vertical ? "var(--space-5)" : "var(--space-8)",
      ...style
    }
  }, rest), steps.map((s, i) => {
    const label = typeof s === "string" ? s : s.label;
    const detail = typeof s === "string" ? null : s.detail;
    const done = i < current,
      active = i === current;
    return /*#__PURE__*/React.createElement("li", {
      key: i,
      style: {
        display: "flex",
        gap: "var(--space-3)",
        alignItems: "flex-start",
        flex: vertical ? "none" : 1,
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 26,
        height: 26,
        flex: "0 0 auto",
        borderRadius: "var(--radius-pill)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        font: "var(--weight-semibold) var(--text-xs)/1 var(--font-mono)",
        background: done ? "var(--teal-600)" : active ? "var(--navy-800)" : "var(--surface-card)",
        color: done || active ? "var(--white)" : "var(--text-muted)",
        border: "1px solid " + (done ? "var(--teal-600)" : active ? "var(--navy-800)" : "var(--border-strong)")
      }
    }, done ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "check",
      size: 14
    }) : i + 1), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 2,
        paddingTop: 3
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--weight-semibold) var(--text-sm)/1.3 var(--font-sans)",
        color: active || done ? "var(--text-strong)" : "var(--text-body)"
      }
    }, label), detail && /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--font-sans)",
        fontSize: "var(--text-xs)",
        lineHeight: "var(--leading-normal)",
        color: "var(--text-muted)"
      }
    }, detail)));
  }));
}
Object.assign(__ds_scope, { StepTracker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/StepTracker.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tabs({
  items = [],
  value,
  onChange,
  variant = "underline",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: "flex",
      gap: variant === "underline" ? "var(--space-6)" : "var(--space-1)",
      borderBottom: variant === "underline" ? "1px solid var(--border-subtle)" : "none",
      background: variant === "segmented" ? "var(--surface-sunken)" : "transparent",
      padding: variant === "segmented" ? "4px" : 0,
      borderRadius: variant === "segmented" ? "var(--radius-control)" : 0,
      ...style
    }
  }, rest), items.map(it => {
    const id = typeof it === "string" ? it : it.value;
    const label = typeof it === "string" ? it : it.label;
    const active = id === value;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      role: "tab",
      "aria-selected": active,
      onClick: () => onChange && onChange(id),
      style: {
        border: "none",
        cursor: "pointer",
        font: "var(--weight-medium) var(--text-sm)/1 var(--font-sans)",
        transition: "var(--transition-control)",
        ...(variant === "underline" ? {
          background: "transparent",
          padding: "0 0 12px",
          color: active ? "var(--text-strong)" : "var(--text-muted)",
          boxShadow: active ? "inset 0 -2px 0 var(--navy-800)" : "none"
        } : {
          background: active ? "var(--surface-card)" : "transparent",
          color: active ? "var(--text-strong)" : "var(--text-muted)",
          padding: "7px 14px",
          borderRadius: "var(--radius-xs)",
          boxShadow: active ? "var(--shadow-sm)" : "none"
        })
      }
    }, label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// scraps/symbol-gen.js
try { (() => {
/* Datonum symbol exploration generator.
   Edit SYM to add a round, then re-run the build snippet in run_script:
     const src = await readFile('scraps/symbol-gen.js');
     const html = new Function(src + '\nreturn build();')();
     await saveFile('guidelines/symbol-directions-in-use.html', html);
   Name etymology: DATA + NUMBER. Rounds F–J and K–O lean on that. */

const NAVY = '#0A2540',
  W = '#FFFFFF',
  T = '#0E8C7F',
  TL = '#17A697';
/* Brass — amber-600 / amber-500 from the palette, used as an alternative accent in round six. */
const BR = '#B8760B',
  BRL = '#D69323';

/* The documented DM Sans D — identical to components/core/Logo.jsx and assets/logo/*.svg */
const D_PATH = 'M9 10h17.1c11.82 0 19.7 8.8 19.7 22s-7.88 22-19.7 22H9z';
/* Canonical N, cap 44, width 25 (x30–55), 7-unit stems, diagonal landing at y54 */
const N_LEFT = '<rect x="30" y="10" width="7" height="44" rx="1.5" fill="%C"/>';
const N_RIGHT = '<rect x="48" y="10" width="7" height="44" rx="1.5" fill="%C"/>';
const N_DIAG = '<path d="M30 10h7.6L55 44.8V54h-7.6L30 19.2z" fill="%C"/>';
const N = c => (N_LEFT + N_DIAG + N_RIGHT).split('%C').join(c);
/* D and N set side by side at their true proportions, then scaled to the shared ink area.
   Native: D x9–45.8 (0.836 ratio), 3-unit gap, N x48.8–73.8 → 64.8 wide. Scaled 0.833 and
   recentred gives a 54-wide, 36.7-tall mark centred on y32 — wider and shorter than a
   single-glyph mark, which is what a two-letter monogram honestly is. No knock-out: both
   letters stay whole. `slots` cuts across both, in the letters' NATIVE space (cap y10–54) — the mask sits inside the
   scaled group, so never pre-compensate for the transform. y22 and y38 give equal thirds. */
const DN = (c, a, id, slots) => {
  const cut = (slots || []).map(([y, h]) => `<rect x="0" y="${y}" width="120" height="${h}" fill="#000"/>`).join('');
  const body = `<path d="${D_PATH}" fill="${c}"/><g transform="translate(18.8,0)">${N(a)}</g>`;
  if (!cut) return `<g transform="translate(-2.5,5.3) scale(0.833)">${body}</g>`;
  return `<mask id="dc${id}" maskUnits="userSpaceOnUse" x="0" y="0" width="120" height="120"><rect width="120" height="120" fill="#fff"/>${cut}</mask>
<g transform="translate(-2.5,5.3) scale(0.833)"><g mask="url(#dc${id})">${body}</g></g>`;
};
const grid = (c, a) => {
  let o = '';
  for (let r = 0; r < 3; r++) for (let q = 0; q < 3; q++) {
    const on = r === 0 && q === 2;
    o += `<rect x="${9 + q * 16}" y="${10 + r * 16}" width="12" height="12" rx="2" fill="${on ? a : c}"${on ? '' : ' opacity="' + (r === 2 ? 0.45 : r === 1 ? 0.7 : 1) + '"'}/>`;
  }
  return o;
};
const SYM = {
  A: {
    name: 'Three bands',
    line: 'Ranked opportunity list',
    round: 1,
    d: (c, a) => `<rect x="9" y="10" width="46" height="10" rx="2" fill="${c}"/><rect x="9" y="27" width="34" height="10" rx="2" fill="${c}"/><rect x="9" y="44" width="22" height="10" rx="2" fill="${c}"/>`
  },
  B: {
    name: 'Scope brackets',
    line: 'What is in, what is out',
    round: 1,
    d: (c, a) => `<path d="M22 10H11a2 2 0 0 0-2 2v40a2 2 0 0 0 2 2h11v-5h-8V15h8z" fill="${c}"/><path d="M42 10h11a2 2 0 0 1 2 2v40a2 2 0 0 1-2 2H42v-5h8V15h-8z" fill="${c}"/><rect x="26" y="20" width="12" height="9" rx="2" fill="${a}"/><rect x="26" y="35" width="12" height="9" rx="2" fill="${c}"/>`
  },
  C: {
    name: 'Aperture',
    line: 'We look first',
    round: 1,
    d: (c, a, id) => `<mask id="m${id}"><rect width="64" height="64" fill="#fff"/><rect x="0" y="22" width="64" height="4" fill="#000"/><rect x="0" y="38" width="64" height="4" fill="#000"/></mask><circle cx="32" cy="32" r="22" fill="${c}" mask="url(#m${id})"/>`
  },
  D: {
    name: 'Step-down',
    line: 'First, second, third',
    round: 1,
    d: (c, a) => `<rect x="9" y="10" width="28" height="10" rx="2" fill="${c}"/><rect x="18" y="27" width="28" height="10" rx="2" fill="${c}"/><rect x="27" y="44" width="28" height="10" rx="2" fill="${a}"/>`
  },
  E: {
    name: 'Convergence',
    line: 'Many steps become one',
    round: 1,
    d: (c, a) => `<g transform="translate(1.6,-3.8) scale(0.911,1)"><g fill="none" stroke="${c}" stroke-width="5" stroke-linecap="round"><path d="M9 12.5h6c11 0 12 19.5 23 19.5"/><path d="M9 32h29"/><path d="M9 51.5h6c11 0 12-19.5 23-19.5"/><path d="M38 32h17" stroke="${a}"/></g>`
  },
  F: {
    name: 'Datum',
    line: 'One measured point',
    round: 2,
    d: (c, a) => `<path d="M9 10v41a3 3 0 0 0 3 3h43" fill="none" stroke="${c}" stroke-width="5" stroke-linecap="round"/><circle cx="41" cy="24" r="7.5" fill="${a}"/><path d="M22 41h6" stroke="${c}" stroke-width="4" stroke-linecap="round"/><path d="M22 33h6" stroke="${c}" stroke-width="4" stroke-linecap="round" opacity=".45"/>`
  },
  G: {
    name: 'Matrix',
    line: 'Time saved against effort',
    round: 2,
    d: (c, a) => grid(c, a)
  },
  H: {
    name: 'Proportion',
    line: 'The share you get back',
    round: 2,
    d: (c, a, id) => `<mask id="p${id}"><rect x="9" y="10" width="46" height="44" rx="4" fill="#fff"/></mask><g mask="url(#p${id})"><rect x="9" y="10" width="46" height="44" fill="#DDE4EB"/><rect x="9" y="27" width="46" height="27" fill="${c}"/><rect x="9" y="20" width="46" height="7" fill="${a}"/></g>`
  },
  I: {
    name: 'Cycle',
    line: 'Tuned once it is running',
    round: 2,
    d: (c, a) => `<g fill="none" stroke-width="5" stroke-linecap="round"><path d="M46 17.5A21 21 0 1 0 51.5 39" stroke="${c}"/><path d="M35 12h13v13" stroke="${a}"/></g>`
  },
  J: {
    name: 'Step change',
    line: 'What changed after',
    round: 2,
    d: (c, a) => `<path d="M11 51h11V38.5h11V26" fill="none" stroke="${c}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><path d="M33 26h11V13.5h11" fill="none" stroke="${a}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>`
  },
  K: {
    name: 'Number sign',
    line: 'DATA rows × NUMBER — the # rebuilt from bands',
    round: 3,
    d: (c, a) => `<rect x="9" y="19" width="46" height="7" rx="1.5" fill="${c}"/><rect x="9" y="38" width="46" height="7" rx="1.5" fill="${c}"/><rect x="19" y="10" width="7" height="44" rx="1.5" fill="${c}"/><rect x="38" y="10" width="7" height="44" rx="1.5" fill="${c}"/><rect x="26" y="26" width="12" height="12" fill="${a}"/>`
  },
  L: {
    name: 'Tally',
    line: 'Counting the hours, literally',
    round: 3,
    d: (c, a) => `<rect x="10" y="10" width="6" height="44" rx="3" fill="${c}"/><rect x="21" y="10" width="6" height="44" rx="3" fill="${c}"/><rect x="32" y="10" width="6" height="44" rx="3" fill="${c}"/><rect x="43" y="10" width="6" height="44" rx="3" fill="${c}"/><path d="M7 49L52 15" stroke="${a}" stroke-width="6" stroke-linecap="round"/>`
  },
  M: {
    name: 'Segments',
    line: 'A digit built from three bands',
    round: 3,
    d: (c, a) => `<rect x="9" y="10" width="46" height="6" rx="1.5" fill="${c}"/><rect x="9" y="48" width="46" height="6" rx="1.5" fill="${c}"/><rect x="9" y="29" width="46" height="6" rx="1.5" fill="${a}"/><rect x="9" y="10" width="6" height="25" rx="1.5" fill="${c}"/><rect x="49" y="10" width="6" height="25" rx="1.5" fill="${c}"/><rect x="9" y="29" width="6" height="25" rx="1.5" fill="${c}"/><rect x="49" y="29" width="6" height="25" rx="1.5" fill="${c}"/>`
  },
  N: {
    name: 'Row × column',
    line: 'A data row meets a number column',
    round: 3,
    d: (c, a) => `<rect x="9" y="28" width="46" height="8" rx="2" fill="${c}"/><rect x="28" y="10" width="8" height="44" rx="2" fill="${c}" opacity=".55"/><rect x="28" y="28" width="8" height="8" fill="${a}"/>`
  },
  O: {
    name: 'Place value',
    line: 'Units, tens, hundreds — ascending',
    round: 3,
    d: (c, a) => `<rect x="9" y="34" width="12" height="20" rx="2" fill="${c}" opacity=".45"/><rect x="26" y="22" width="12" height="32" rx="2" fill="${c}" opacity=".75"/><rect x="43" y="10" width="12" height="44" rx="2" fill="${a}"/>`
  },
  P: {
    name: 'Quotient',
    line: 'A ratio, split and measured',
    round: 4,
    d: (c, a, id) => `<mask id="q${id}"><rect x="9" y="10" width="46" height="44" rx="7" fill="#fff"/><rect x="26" y="25" width="14" height="14" rx="2" fill="#000"/></mask><g mask="url(#q${id})"><rect x="9" y="10" width="46" height="44" fill="${c}"/><path d="M55 10L9 54h46z" fill="${a}"/></g>`
  },
  Q: {
    name: 'Iris',
    line: 'Four blades opening onto a measured centre',
    round: 4,
    acc: [BR, BRL],
    d: (c, a) => `<g><rect x="32" y="10" width="23" height="11" rx="2.5" fill="${c}"/><rect x="32" y="10" width="23" height="11" rx="2.5" fill="${c}" transform="rotate(90 32 32)"/><rect x="32" y="10" width="23" height="11" rx="2.5" fill="${c}" transform="rotate(180 32 32)"/><rect x="32" y="10" width="23" height="11" rx="2.5" fill="${a}" transform="rotate(270 32 32)"/></g>`
  },
  R: {
    name: 'Knock-out',
    line: 'The reading cut out of the block',
    round: 4,
    acc: [BR, BRL],
    d: (c, a, id) => `<mask id="k${id}"><rect x="9" y="10" width="46" height="44" rx="7" fill="#fff"/><path d="M17 45h9V34h9V23h10" fill="none" stroke="#000" stroke-width="6.5" stroke-linecap="square" stroke-linejoin="miter"/></mask><rect x="9" y="10" width="46" height="44" rx="7" fill="${c}" mask="url(#k${id})"/><rect x="41" y="16" width="9" height="9" rx="1.5" fill="${a}"/>`
  },
  S: {
    name: 'Interlock',
    line: 'Two systems joined, one channel between',
    round: 4,
    d: (c, a) => `<path d="M9 10h29v11.5H20.5V54H9z" fill="${c}"/><path d="M55 54H26V42.5h17.5V10H55z" fill="${a}"/>`
  },
  T: {
    name: 'Counter',
    line: 'A digit with the datum inside it',
    round: 4,
    d: (c, a, id) => `<mask id="t${id}"><rect x="9" y="10" width="46" height="44" rx="15" fill="#fff"/><rect x="20" y="21" width="24" height="22" rx="9" fill="#000"/></mask><rect x="9" y="10" width="46" height="44" rx="15" fill="${c}" mask="url(#t${id})"/><rect x="27" y="27" width="10" height="10" rx="2" fill="${a}"/>`
  },
  U: {
    name: 'Slashed zero',
    line: 'The programmer\u2019s numeral — pure NUMBER',
    round: 5,
    d: (c, a, id) => `<mask id="u${id}"><ellipse cx="32" cy="32" rx="18" ry="22" fill="#fff"/><ellipse cx="32" cy="32" rx="9" ry="13" fill="#000"/></mask><ellipse cx="32" cy="32" rx="18" ry="22" fill="${c}" mask="url(#u${id})"/><path d="M21 45L43 19" stroke="${a}" stroke-width="6" stroke-linecap="round"/>`
  },
  V: {
    name: 'Cursor',
    line: 'Where the data goes in',
    round: 5,
    d: (c, a) => `<rect x="22" y="10" width="20" height="33" rx="2" fill="${c}"/><rect x="12" y="48" width="40" height="6" rx="3" fill="${a}"/>`
  },
  W: {
    name: 'Caliper',
    line: 'Measuring before building',
    round: 5,
    d: (c, a) => `<path d="M9 10h46v7H16v30h39v7H9z" fill="${c}"/><rect x="30" y="20" width="9" height="24" rx="2" fill="${a}"/>`
  },
  X: {
    name: 'Range',
    line: '2\u20133 weeks. 10\u201380 people. The brand speaks in ranges',
    round: 5,
    d: (c, a) => `<rect x="9" y="10" width="6" height="44" rx="2" fill="${c}"/><rect x="49" y="10" width="6" height="44" rx="2" fill="${c}"/><rect x="19" y="29" width="26" height="6" rx="3" fill="${a}"/>`
  },
  Y: {
    name: 'Dial',
    line: 'Taking a reading',
    round: 5,
    d: (c, a) => `<path d="M21.5 48.5A20.5 20.5 0 1 1 42.5 48.5" fill="none" stroke="${c}" stroke-width="7" stroke-linecap="round"/><path d="M32 33L45 20" stroke="${a}" stroke-width="6.5" stroke-linecap="round"/>`
  },
  Z: {
    name: 'Scale',
    line: 'One reading that matters, among many',
    round: 5,
    d: (c, a) => `<g fill="${c}"><rect x="9" y="32" width="4" height="22" rx="1.5" opacity=".55"/><rect x="16" y="32" width="4" height="22" rx="1.5" opacity=".55"/><rect x="23" y="32" width="4" height="22" rx="1.5" opacity=".55"/><rect x="37" y="32" width="4" height="22" rx="1.5" opacity=".55"/><rect x="44" y="32" width="4" height="22" rx="1.5" opacity=".55"/><rect x="51" y="32" width="4" height="22" rx="1.5" opacity=".55"/></g><rect x="29" y="10" width="6" height="44" rx="2" fill="${a}"/>`
  },
  AA: {
    name: 'Percent',
    line: 'A numeric operator, rebuilt from data cells',
    round: 5,
    d: (c, a) => `<rect x="9" y="10" width="16" height="16" rx="3.5" fill="${c}"/><rect x="39" y="38" width="16" height="16" rx="3.5" fill="${c}"/><path d="M45 13L19 51" stroke="${a}" stroke-width="7" stroke-linecap="round"/>`
  },
  AB: {
    name: 'Delta',
    line: 'Change, cut into measured bands',
    round: 5,
    d: (c, a, id) => `<mask id="d${id}"><path d="M32 10L55 54H9z" fill="#fff"/><rect x="0" y="31" width="64" height="4.5" fill="#000"/><rect x="0" y="42" width="64" height="4.5" fill="#000"/></mask><g mask="url(#d${id})"><path d="M32 10L55 54H9z" fill="${c}"/><rect x="0" y="0" width="64" height="31" fill="${a}"/></g>`
  },
  AC: {
    name: 'Digit tile',
    line: 'The tile is the mark — a zero with its datum',
    round: 5,
    d: (c, a, id) => `<mask id="g${id}"><rect x="9" y="10" width="46" height="44" rx="10" fill="#fff"/><ellipse cx="32" cy="32" rx="13" ry="16" fill="#000"/><ellipse cx="32" cy="32" rx="4" ry="6" fill="#fff"/></mask><rect x="9" y="10" width="46" height="44" rx="10" fill="${c}" mask="url(#g${id})"/><ellipse cx="32" cy="32" rx="4" ry="6" fill="${a}"/>`
  },
  AD: {
    name: 'Report',
    line: 'The written report, with its rows',
    round: 5,
    d: (c, a, id) => `<mask id="r${id}"><path d="M13 10h27l15 15v29H13z" fill="#fff"/><rect x="19" y="33" width="24" height="4.5" fill="#000"/><rect x="19" y="42" width="17" height="4.5" fill="#000"/></mask><g mask="url(#r${id})"><path d="M13 10h27l15 15v29H13z" fill="${c}"/></g><path d="M40 10l15 15H40z" fill="${a}"/>`
  },
  AE: {
    name: 'Ascent',
    line: 'D, stepping up — brass on the destination',
    round: 6,
    acc: [BR, BRL],
    d: (c, a) => `<rect x="9" y="44" width="28" height="10" rx="2" fill="${c}"/><rect x="18" y="27" width="28" height="10" rx="2" fill="${c}"/><rect x="27" y="10" width="28" height="10" rx="2" fill="${a}"/>`
  },
  AF: {
    name: 'Ascent, ranked',
    line: 'A inverted — shortest first, longest last',
    round: 6,
    acc: [BR, BRL],
    d: (c, a) => `<rect x="9" y="10" width="22" height="10" rx="2" fill="${c}"/><rect x="9" y="27" width="34" height="10" rx="2" fill="${c}"/><rect x="9" y="44" width="46" height="10" rx="2" fill="${a}"/>`
  },
  AF2: {
    name: 'Ascent, right-aligned',
    line: 'Ranked right to a common edge, brass on the leading row',
    round: 6,
    acc: [BR, BRL],
    d: (c, a) => `<rect x="9" y="10" width="46" height="10" rx="2" fill="${a}"/><rect x="21" y="27" width="34" height="10" rx="2" fill="${c}"/><rect x="33" y="44" width="22" height="10" rx="2" fill="${c}"/>`
  },
  AG: {
    name: 'Stepped hash',
    line: 'K, with the rows stepping up',
    round: 6,
    acc: [BR, BRL],
    d: (c, a) => `<rect x="9" y="38" width="34" height="7" rx="1.5" fill="${c}"/><rect x="21" y="19" width="34" height="7" rx="1.5" fill="${c}"/><rect x="19" y="10" width="7" height="44" rx="1.5" fill="${c}"/><rect x="38" y="10" width="7" height="44" rx="1.5" fill="${c}"/><rect x="26" y="26" width="12" height="12" fill="${a}"/>`
  },
  AH: {
    name: 'Hash counter',
    line: 'K with the intersection knocked out, brass behind',
    round: 6,
    acc: [BR, BRL],
    d: (c, a, id) => `<mask id="hc${id}"><rect width="64" height="64" fill="#fff"/><rect x="26" y="26" width="12" height="12" fill="#000"/></mask><rect x="26" y="26" width="12" height="12" rx="1" fill="${a}"/><g mask="url(#hc${id})"><rect x="9" y="19" width="46" height="7" rx="1.5" fill="${c}"/><rect x="9" y="38" width="46" height="7" rx="1.5" fill="${c}"/><rect x="19" y="10" width="7" height="44" rx="1.5" fill="${c}"/><rect x="38" y="10" width="7" height="44" rx="1.5" fill="${c}"/></g>`
  },
  AI: {
    name: 'Rotor',
    line: 'Q reduced to three blades at 120°',
    round: 6,
    acc: [BR, BRL],
    d: (c, a) => `<g transform="translate(32,35.6) scale(1.164) translate(-32,-32)"><rect x="26.5" y="10" width="11" height="23" rx="3" fill="${c}" transform="rotate(0 32 32)"/><rect x="26.5" y="10" width="11" height="23" rx="3" fill="${c}" transform="rotate(120 32 32)"/><rect x="26.5" y="10" width="11" height="23" rx="3" fill="${a}" transform="rotate(240 32 32)"/></g>`
  },
  AJ: {
    name: 'Iris, banded',
    line: 'Q blades cut by the band rhythm',
    round: 6,
    acc: [BR, BRL],
    d: (c, a, id) => `<mask id="ib${id}"><rect width="64" height="64" fill="#fff"/><rect x="0" y="25.5" width="64" height="3" fill="#000"/><rect x="0" y="35.5" width="64" height="3" fill="#000"/></mask><g mask="url(#ib${id})"><rect x="32" y="10" width="23" height="11" rx="2.5" fill="${c}"/><rect x="32" y="10" width="23" height="11" rx="2.5" fill="${c}" transform="rotate(90 32 32)"/><rect x="32" y="10" width="23" height="11" rx="2.5" fill="${c}" transform="rotate(180 32 32)"/><rect x="32" y="10" width="23" height="11" rx="2.5" fill="${a}" transform="rotate(270 32 32)"/></g>`
  },
  AK: {
    name: 'Rising matrix',
    line: 'A × K — cells stacking as they rank',
    round: 6,
    acc: [BR, BRL],
    d: (c, a) => `<rect x="9" y="42" width="12" height="12" rx="2" fill="${c === W ? '#17A697' : '#0E8C7F'}"/><rect x="26" y="42" width="12" height="12" rx="2" fill="${c}"/><rect x="26" y="26" width="12" height="12" rx="2" fill="${c}"/><rect x="43" y="42" width="12" height="12" rx="2" fill="${c}"/><rect x="43" y="26" width="12" height="12" rx="2" fill="${c}"/><rect x="43" y="10" width="12" height="12" rx="2" fill="${a}"/>`
  },
  AL: {
    name: 'Quarter turn',
    line: 'One blade lifted out of the frame',
    round: 6,
    acc: [BR, BRL],
    d: (c, a, id) => `<mask id="qt${id}"><rect x="9" y="10" width="46" height="44" rx="7" fill="#fff"/><rect x="30" y="7" width="12" height="26" fill="#000"/><rect x="30" y="31" width="28" height="12" fill="#000"/></mask><rect x="9" y="10" width="46" height="44" rx="7" fill="${c}" mask="url(#qt${id})"/><rect x="30" y="31" width="25" height="12" rx="2" fill="${a}"/>`
  },
  AM: {
    name: 'Ledger',
    line: 'Ranked rows on a measured baseline',
    round: 6,
    acc: [BR, BRL],
    d: (c, a) => `<rect x="9" y="11" width="22" height="8" rx="2" fill="${c}" opacity=".55"/><rect x="9" y="24" width="34" height="8" rx="2" fill="${c}" opacity=".78"/><rect x="9" y="37" width="46" height="8" rx="2" fill="${c}"/><rect x="9" y="50" width="46" height="4" rx="2" fill="${a}"/>`
  },
  AN: {
    name: 'Hash, ascending',
    line: 'K rotated into a rising lattice',
    round: 6,
    acc: [BR, BRL],
    d: (c, a) => `<g transform="rotate(-14 32 32)"><rect x="14" y="22.5" width="36" height="5.5" rx="1.5" fill="${c}"/><rect x="14" y="36" width="36" height="5.5" rx="1.5" fill="${c}"/><rect x="22.5" y="14" width="5.5" height="36" rx="1.5" fill="${c}"/><rect x="36" y="14" width="5.5" height="36" rx="1.5" fill="${c}"/><rect x="28" y="28" width="8" height="8" fill="${a}"/></g>`
  },
  AO: {
    name: 'N, stepped',
    line: 'The N of NUMBER — stems bridged by the ascent',
    round: 7,
    acc: [BR, BRL],
    d: (c, a) => `<rect x="9" y="10" width="8" height="44" rx="2" fill="${c}"/><rect x="47" y="10" width="8" height="44" rx="2" fill="${c}"/><rect x="19" y="41" width="11" height="8" rx="2" fill="${c}"/><rect x="27" y="28" width="11" height="8" rx="2" fill="${c}"/><rect x="35" y="15" width="11" height="8" rx="2" fill="${a}"/>`
  },
  AP: {
    name: 'DN monogram',
    line: 'The documented DM Sans D interlocked with a full N',
    round: 7,
    acc: [BR, BRL],
    d: (c, a, id) => DN(c, a, 'p' + id)
  },
  AQ: {
    name: 'Dat0num',
    line: 'The mark is the zero inside the name',
    round: 7,
    acc: [BR, BRL],
    d: (c, a, id) => `<mask id="z${id}"><rect x="9" y="10" width="46" height="44" rx="13" fill="#fff"/><rect x="20" y="21" width="24" height="22" rx="8" fill="#000"/></mask><rect x="9" y="10" width="46" height="44" rx="13" fill="${c}" mask="url(#z${id})"/><rect x="17" y="29" width="30" height="6" rx="2" fill="${a}"/>`
  },
  AR: {
    name: 'num',
    line: 'The arch of n and m — the second half of the name',
    round: 7,
    acc: [BR, BRL],
    d: (c, a) => `<g transform="translate(0,54) scale(1,1.097) translate(0,-54)"><path d="M9 54V27a13 13 0 0 1 26 0v27h-8V27a5 5 0 0 0-10 0v27z" fill="${c}"/><path d="M39 54V27a13 13 0 0 1 16-12.7v8.4A5 5 0 0 0 47 27v27z" fill="${a}"/></g>`
  },
  AS: {
    name: 'N, cut',
    line: 'A solid N with one measured band removed',
    round: 7,
    acc: [BR, BRL],
    d: (c, a, id) => `<mask id="nc${id}"><rect width="64" height="64" fill="#fff"/><rect x="0" y="29" width="64" height="6" fill="#000"/></mask><g mask="url(#nc${id})"><rect x="9" y="10" width="9" height="44" rx="2" fill="${c}"/><rect x="46" y="10" width="9" height="44" rx="2" fill="${c}"/><path d="M18 10h10l27 44H45z" fill="${c}"/></g><rect x="18" y="29" width="28" height="6" rx="1.5" fill="${a}"/>`
  },
  AT: {
    name: 'Off-axis',
    line: 'Deliberately asymmetric — no mirror line to fall back on',
    round: 7,
    acc: [BR, BRL],
    d: (c, a) => `<rect x="9" y="10" width="30" height="9" rx="2" fill="${c}"/><rect x="24" y="24" width="31" height="9" rx="2" fill="${c}"/><rect x="14" y="38" width="22" height="9" rx="2" fill="${a}"/><rect x="43" y="38" width="12" height="16" rx="2" fill="${c}" opacity=".45"/>`
  },
  AU: {
    name: 'DN, one cut',
    line: 'The monogram with a single slot — the original D language',
    round: 8,
    acc: [BR, BRL],
    d: (c, a, id) => DN(c, a, 'u' + id, [[30, 4]])
  },
  AV: {
    name: 'DN, two cuts',
    line: 'The monogram cut twice — three measured bands across both letters',
    round: 8,
    acc: [BR, BRL],
    d: (c, a, id) => DN(c, a, 'v' + id, [[22, 4], [38, 4]])
  },
  AW: {
    name: 'D, N implied',
    line: 'The N\u2019s own diagonal, descending through the D',
    round: 9,
    acc: [BR, BRL],
    d: (c, a, id) => `<mask id="dg${id}"><rect width="64" height="64" fill="#fff"/><g transform="rotate(60 32 32)"><rect x="-30" y="28" width="124" height="8" fill="#000"/></g></mask>
<path d="${D_PATH}" fill="${c}" mask="url(#dg${id})"/>
<clipPath id="dp${id}"><path d="${D_PATH}"/></clipPath>
<g clip-path="url(#dp${id})"><g transform="rotate(60 32 32)"><rect x="-30" y="29.5" width="124" height="5" fill="${a}"/></g></g>`
  },
  AX: {
    name: 'D, two cuts + rise',
    line: 'The approved cuts, with the diagonal reading as N',
    round: 9,
    acc: [BR, BRL],
    d: (c, a, id) => `<mask id="dx${id}"><rect width="64" height="64" fill="#fff"/><rect x="0" y="22" width="64" height="4" fill="#000"/><rect x="0" y="38" width="64" height="4" fill="#000"/><g transform="rotate(-40 32 32)"><rect x="-30" y="28.5" width="124" height="7" fill="#000"/></g></mask>
<path d="${D_PATH}" fill="${c}" mask="url(#dx${id})"/>
<clipPath id="dxp${id}"><path d="${D_PATH}"/></clipPath>
<g clip-path="url(#dxp${id})"><g transform="rotate(-40 32 32)"><rect x="-30" y="30.25" width="124" height="3.5" fill="${a}"/></g></g>`
  },
  AY: {
    name: 'D holding n',
    line: 'The second letter subordinate, inside the bowl',
    round: 9,
    acc: [BR, BRL],
    d: (c, a, id) => `<mask id="dn9${id}"><rect width="64" height="64" fill="#fff"/><path d="M22 42V30.6a8 8 0 0 1 16 0V42h-5V30.6a3 3 0 0 0-6 0V42z" fill="#000" stroke="#000" stroke-width="3"/></mask>
<path d="${D_PATH}" fill="${c}" mask="url(#dn9${id})"/>
<path d="M22 42V30.6a8 8 0 0 1 16 0V42h-5V30.6a3 3 0 0 0-6 0V42z" fill="${a}"/>`
  },
  AZ: {
    name: 'Inset rise',
    line: 'The stroke stops inside the form — no sash across it',
    round: 10,
    acc: [BR, BRL],
    d: (c, a, id) => `<mask id="z1${id}"><rect width="64" height="64" fill="#fff"/><g transform="rotate(-40 32 32)"><rect x="17" y="27.5" width="30" height="9" rx="4.5" fill="#000"/></g></mask>
<path d="${D_PATH}" fill="${c}" mask="url(#z1${id})"/>
<g transform="rotate(-40 32 32)"><rect x="20" y="30" width="24" height="4" rx="2" fill="${a}"/></g>`
  },
  BA: {
    name: 'N-stroke',
    line: 'A stem and a rise — a letterform, not a band',
    round: 10,
    acc: [BR, BRL],
    d: (c, a, id) => `<mask id="z2${id}"><rect width="64" height="64" fill="#fff"/><path d="M22 44V31.5L35.5 22" fill="none" stroke="#000" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/></mask>
<path d="${D_PATH}" fill="${c}" mask="url(#z2${id})"/>
<path d="M22 44V31.5L35.5 22" fill="none" stroke="${a}" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>`
  },
  BB: {
    name: 'Channel & datum',
    line: 'Negative space does the work; brass is one measured point',
    round: 10,
    acc: [BR, BRL],
    d: (c, a, id) => `<mask id="z3${id}"><rect width="64" height="64" fill="#fff"/><g transform="rotate(-40 32 32)"><rect x="17" y="28.5" width="30" height="7" rx="3.5" fill="#000"/></g></mask>
<path d="${D_PATH}" fill="${c}" mask="url(#z3${id})"/>
<rect x="33.5" y="23" width="8" height="8" rx="1.5" fill="${a}"/>`
  },
  BC: {
    name: 'Woven',
    line: 'Warp and weft — your tools crossed with our workflow',
    round: 11,
    acc: [BR, BRL],
    d: (c, a, id) => `<mask id="w1${id}"><rect width="64" height="64" fill="#fff"/><rect x="16" y="16" width="8" height="8" fill="#000"/><rect x="41.5" y="41.5" width="8" height="8" fill="#000"/></mask>
<rect x="9" y="16" width="46" height="8" rx="1" fill="${c}"/><rect x="9" y="41.5" width="46" height="8" rx="1" fill="${c}"/>
<g mask="url(#w1${id})"><rect x="16" y="9" width="8" height="46" rx="1" fill="${a}"/><rect x="41.5" y="9" width="8" height="46" rx="1" fill="${a}"/></g>`
  },
  BD: {
    name: 'Punch card',
    line: 'Data as punched holes — pre-digital, plainly numeric',
    round: 11,
    acc: [BR, BRL],
    d: (c, a, id) => `<mask id="w2${id}"><rect x="9" y="10" width="46" height="44" rx="3" fill="#fff"/><rect x="15" y="16" width="7" height="7" rx="1.5" fill="#000"/><rect x="26" y="16" width="7" height="7" rx="1.5" fill="#000"/><rect x="37" y="28.5" width="7" height="7" rx="1.5" fill="#000"/><rect x="15" y="41" width="7" height="7" rx="1.5" fill="#000"/><rect x="37" y="41" width="7" height="7" rx="1.5" fill="#000"/><rect x="26" y="28.5" width="7" height="7" rx="1.5" fill="#000"/></mask>
<rect x="9" y="10" width="46" height="44" rx="3" fill="${c}" mask="url(#w2${id})"/><rect x="48" y="16" width="7" height="7" rx="1.5" fill="${a}"/>`
  },
  BE: {
    name: 'Contour',
    line: 'The workflow map — nested contours of one business',
    round: 11,
    acc: [BR, BRL],
    d: (c, a) => `<g transform="translate(1.6,-3.8) scale(0.911,1)"><g fill="none" stroke="${c}" stroke-width="4.5" stroke-linejoin="round"><path d="M9 46c6-14 12-6 19-14s3-16 12-16 15 8 15 8"/><path d="M9 54c8-16 14-8 21-16s4-16 13-16 12 6 12 6"/></g><path d="M13 34c5-11 11-4 17-11" fill="none" stroke="${a}" stroke-width="4.5" stroke-linecap="round"/></g>`
  },
  BF: {
    name: 'Seal',
    line: 'The audit as a mark of certification',
    round: 11,
    acc: [BR, BRL],
    d: (c, a, id) => `<mask id="w3${id}"><circle cx="32" cy="32" r="22" fill="#fff"/><circle cx="32" cy="32" r="14.5" fill="#000"/></mask>
<circle cx="32" cy="32" r="22" fill="${c}" mask="url(#w3${id})"/>
<rect x="22" y="25" width="20" height="5" rx="1.5" fill="${c}"/><rect x="22" y="34" width="13" height="5" rx="1.5" fill="${a}"/>`
  },
  BG: {
    name: 'Before / after',
    line: 'Dense manual work resolving into one clean field',
    round: 11,
    acc: [BR, BRL],
    d: (c, a) => `<g fill="${c}"><rect x="9" y="10" width="3" height="44" rx="1.5"/><rect x="14.5" y="10" width="3" height="44" rx="1.5"/><rect x="20" y="10" width="3" height="44" rx="1.5"/><rect x="25.5" y="10" width="3" height="44" rx="1.5" opacity=".55"/><rect x="31" y="10" width="3" height="44" rx="1.5" opacity=".3"/></g><rect x="38" y="10" width="17" height="44" rx="2.5" fill="${a}"/>`
  }
};
let uid = 0;
/* Accent resolution: an explicit request always wins. A symbol's `acc` pair only
   substitutes when the caller passed the palette default (T light / TL dark), so
   svg(k,z,NAVY,NAVY) gives a true one-colour mark and svg(k,z,W,BRL) keeps amber-500. */
const svg = (k, h, c, a) => {
  const s = SYM[k];
  const acc = s.acc ? a === T ? s.acc[0] : a === TL ? s.acc[1] : a : a;
  return `<svg viewBox="0 0 64 64" width="${h}" height="${h}" style="display:block;flex:0 0 auto;overflow:visible">${s.d(c, acc, ++uid)}</svg>`;
};
const word = (s, c) => `<span style="font:500 ${s}px/1 var(--font-display);letter-spacing:-.01em;color:${c};white-space:nowrap">Datonum</span>`;
const lock = (k, h, c, a) => `<span style="display:inline-flex;align-items:center;gap:${Math.round(h * 0.34)}px">${svg(k, h * 1.18, c, a)}${word(Math.round(h * 0.86), c)}</span>`;
const tile = (k, z) => `<span style="width:${z}px;height:${z}px;border-radius:${Math.round(z * 0.22)}px;background:${NAVY};display:inline-flex;align-items:center;justify-content:center;flex:0 0 auto">${svg(k, z * 0.56, W, TL)}</span>`;
const header = k => `<div style="width:520px;border:1px solid var(--border-subtle);border-radius:8px;overflow:hidden;background:#fff">
<div style="height:52px;display:flex;align-items:center;gap:22px;padding:0 18px;border-bottom:1px solid var(--border-subtle)">${lock(k, 17, NAVY, T)}
<span style="display:flex;gap:14px;margin-left:auto;font:500 11px/1 var(--font-sans);color:var(--text-muted)"><span>Services</span><span>Audit</span><span>Approach</span></span>
<span style="background:${NAVY};color:#fff;font:600 10px/1 var(--font-sans);padding:7px 11px;border-radius:5px">Book a call</span></div>
<div style="padding:22px 18px 24px;background:${NAVY};background-image:radial-gradient(120% 90% at 88% 0%, rgba(23,166,151,.20) 0%, rgba(10,37,64,0) 60%)">
<span style="font:600 8px/1.2 var(--font-sans);letter-spacing:.14em;text-transform:uppercase;color:${TL}">For founder-led service businesses</span>
<div style="font:300 27px/1.1 var(--font-display);letter-spacing:-.02em;color:#fff;margin-top:9px;max-width:15ch">Find out exactly where AI will save your team time</div></div></div>`;
const slide = k => `<div style="width:300px;height:169px;background:${NAVY};border-radius:5px;padding:20px;display:flex;flex-direction:column;justify-content:space-between;background-image:radial-gradient(110% 130% at 90% 0%, rgba(23,166,151,.22) 0%, rgba(10,37,64,0) 62%);box-shadow:var(--shadow-md)">
${lock(k, 11, W, TL)}<div><span style="font:600 6px/1.2 var(--font-sans);letter-spacing:.14em;text-transform:uppercase;color:${TL}">AI Readiness &amp; Automation Audit</span>
<div style="font:300 25px/1.06 var(--font-display);letter-spacing:-.02em;color:#fff;margin-top:7px;max-width:16ch">Findings and 90-day roadmap</div></div>
<div style="display:flex;justify-content:space-between;border-top:1px solid var(--border-ink);padding-top:8px;font:500 7px/1.4 var(--font-mono);color:var(--navy-300)"><span>datonum.com</span><span>Confidential</span></div></div>`;
const card = k => `<div style="width:250px;height:143px;background:${NAVY};border-radius:7px;padding:18px;display:flex;flex-direction:column;justify-content:space-between;box-shadow:var(--shadow-md)">
${lock(k, 15, W, TL)}<div><div style="font:600 11px/1.3 var(--font-sans);color:#fff">Ros B</div>
<div style="font:9px/1.4 var(--font-sans);color:var(--navy-200)">Founder</div>
<div style="font:500 9px/1.6 var(--font-mono);color:var(--navy-300);margin-top:6px">admin@datonum.com</div></div></div>`;
const social = k => `<div style="width:200px;height:200px;background:#fff;border:1px solid var(--border-subtle);border-radius:7px;padding:20px;display:flex;flex-direction:column;justify-content:space-between">
<div style="display:flex;justify-content:space-between;align-items:center">${lock(k, 13, NAVY, T)}<span style="font:600 7px/1.2 var(--font-sans);letter-spacing:.14em;text-transform:uppercase;color:${T}">Audit note</span></div>
<div><div style="font:300 62px/1 var(--font-display);letter-spacing:-.03em;color:${NAVY};font-variant-numeric:tabular-nums">67</div>
<div style="font:600 12px/1.25 var(--font-sans);color:var(--text-strong);margin-top:6px;max-width:18ch">hours a month across five workflows</div></div>
<div style="display:flex;justify-content:space-between;border-top:1px solid var(--border-subtle);padding-top:10px;font:500 8px/1.4 var(--font-mono);color:var(--text-muted)"><span>Estimates.</span><span>datonum.com</span></div></div>`;
const doc = k => `<div style="width:200px;height:200px;background:#fff;border:1px solid var(--border-subtle);border-radius:5px;padding:18px;display:flex;flex-direction:column;box-shadow:var(--shadow-sm)">
<span style="align-self:flex-start;background:var(--teal-100);color:${T};font:600 6px/1.2 var(--font-sans);letter-spacing:.08em;text-transform:uppercase;padding:3px 5px;border-radius:2px">One-pager · 01</span>
<div style="font:300 17px/1.15 var(--font-display);letter-spacing:-.02em;color:var(--text-strong);margin-top:12px">Find out exactly where AI will save your team time</div>
<div style="font:7px/1.6 var(--font-sans);color:var(--text-muted);margin-top:8px">A structured review of how your business actually runs, and a ranked plan of the work AI can take off your team's hands.</div>
<div style="display:flex;gap:14px;margin-top:12px;padding:9px 0;border-top:1px solid var(--border-subtle);border-bottom:1px solid var(--border-subtle)">
<div><div style="font:300 15px/1 var(--font-display);color:var(--text-strong)">2–3</div><div style="font:600 6px/1.3 var(--font-sans);color:var(--text-strong);margin-top:2px">weeks</div></div>
<div><div style="font:300 15px/1 var(--font-display);color:var(--text-strong)">3–5</div><div style="font:600 6px/1.3 var(--font-sans);color:var(--text-strong);margin-top:2px">people</div></div></div>
<div style="margin-top:auto;display:flex;justify-content:space-between;align-items:center;border-top:1px solid var(--border-subtle);padding-top:8px">${lock(k, 8, NAVY, T)}<span style="font:500 6px/1.4 var(--font-mono);color:var(--text-muted)">1 / 2</span></div></div>`;
const email = k => `<div style="width:250px;background:#fff;border:1px solid var(--border-subtle);border-radius:5px;overflow:hidden;box-shadow:var(--shadow-sm)">
<div style="background:${NAVY};padding:14px 18px">${lock(k, 12, W, TL)}</div>
<div style="padding:16px 18px 18px">
<div style="font:7px/1.6 var(--font-sans);color:var(--text-muted)">Hi Alex,</div>
<div style="font:500 13px/1.3 var(--font-display);letter-spacing:-.01em;color:${NAVY};margin-top:8px">Your audit report is ready</div>
<div style="font:7px/1.7 var(--font-sans);color:var(--text-muted);margin-top:7px">We found fourteen opportunities. Five are worth building, three should stay human.</div>
<span style="display:inline-block;background:${NAVY};color:#fff;font:600 7px/1 var(--font-sans);padding:8px 13px;border-radius:4px;margin-top:12px">Open the report</span>
<div style="margin-top:14px;padding-top:12px;border-top:1px solid var(--border-subtle);display:flex;align-items:center;gap:10px">
<span style="padding-right:10px;border-right:2px solid ${T};display:flex">${svg(k, 22, NAVY, T)}</span>
<div><div style="font:600 8px/1.3 var(--font-sans);color:${NAVY}">Ros B</div><div style="font:500 6px/1.5 var(--font-mono);color:var(--text-muted)">admin@datonum.com</div></div></div></div></div>`;
const favicons = k => `<div style="width:380px;display:flex;flex-direction:column;gap:14px">
<div style="display:flex;align-items:center;gap:12px">${tile(k, 44)}${tile(k, 32)}${tile(k, 20)}</div>
<span style="display:inline-flex;align-items:center;gap:7px;background:var(--surface-sunken);border-radius:5px;padding:7px 10px;align-self:flex-start;max-width:100%">
${tile(k, 14)}<span style="font:400 9px/1 var(--font-sans);color:var(--text-body)">Datonum — AI Readiness…</span></span>
<div style="display:inline-flex;align-items:center;gap:9px;align-self:flex-start">${tile(k, 26)}<span style="font:400 9px/1.3 var(--font-sans);color:var(--text-muted)">Social profile</span></div></div>`;
const surf = (l, h) => `<div class="app"><div class="lbl">${l}</div>${h}</div>`;
const RISK = {
  "AF2": "AF ranked to a right-hand edge with brass on the leading row, so the eye starts on the accent and the stack reads as a list resolving. The common right edge gives it a typographic quality the left-aligned version lacks.",
  "BC": "A woven crossing — navy warp, brass weft, alternating over and under at the four intersections so the two systems genuinely interlace. The most literal statement of \"keep your tools, we improve the workflow around them\". Densest form here; check the 17u openings at tile sizes.",
  "BD": "A punch card: holes carry the data, and the offset column is the reading. Pre-digital rather than AI-flavoured, which suits a firm that refuses the word \"agent\" — and no other candidate references computing history. Risk: it may read as a keypad or a domino.",
  "BE": "Contour lines — the audit’s named deliverable is a workflow map, and this is a map. Soft, drawn, unlike every hard-edged geometric option, with the brass line marking the route taken. Stroke-based, so weight needs compensation small.",
  "BF": "A seal. The audit is effectively a certification of readiness, and a seal is the one form that carries authority without saying anything technical. Two ranked bars inside the ring keep the data reading. Risk: seals can look institutional or retro.",
  "BG": "A before-and-after in one glyph: five thinning navy rules for the manual work, one solid brass block for what replaces it. The only candidate that shows a transformation rather than a structure, and the thinning gradient gives it motion.",
  "AZ": "AW with the stroke pulled inside the letter — it starts and ends within the bowl, so nothing crosses the silhouette edge to edge and the sash reading goes. Rounded caps make it read as a deliberate incision. Closest of the three to the AW you approved.",
  "BA": "The stroke becomes an actual letterform: a short stem turning into the rise, so it reads as the N inside the D rather than a band laid over it. Most meaningful of the three, and the kink kills the sash outright — but it is the busiest, and the joint needs checking at 16px.",
  "BB": "The diagonal becomes pure negative space and the brass reduces to a single square datum at the top of the rise. No brass bar at all, so no sash is possible; the accent now reads as the measured point the audit produces. Quietest option, and the only one where the accent is optional in one-colour use.",
  "AW": "Keeps the square silhouette and full 44 cap — no width penalty, no imbalance — while the diagonal carries the N. The stroke descends left to right at 60°, matching both the direction and the pitch of the diagonal in the system's own N (25 across, 44 down = 60.4°), so it reads as the letter rather than as a sash. Bar is 5u perpendicular — wider than the 4u it started at — inside an 8u channel. Thickness is perpendicular, so at 60° it cuts a 16u vertical slice of the 44u cap; that is why the channel is narrower here than it was at shallower angles. On navy the strip inverts to amber-500 (#D69323), the palette's dark-surface brass — lighter than the #B8760B used on white, so it lifts off the navy instead of repeating the light-mode colour, and it still bridges the two halves of the D.",
  "AX": "The approved two-cut construction with the diagonal added, so all three ideas you liked are present: the bands, the ascent and the second letter. Three channels through one form is the most detailed mark here — the outer bands get thin, so verify at the favicon size.",
  "AY": "The D stays whole and dominant; the n sits inside it at subordinate scale, in brass, with a knocked-out channel so it reads as inset rather than stuck on. Solves the 2:1 imbalance by making it deliberate hierarchy instead of two equals competing.",
  "AU": "One slot reads as a deliberate incision rather than a pattern — it keeps the engineered feel of the approved mark while the DN pair solves the doubling. The single cut lands mid-counter on the D, which is the strongest place for it; verify it does not close up at the 14px tile.",
  "AV": "Both letters cut into three bands by the same slots, so the D and the N are visibly built from one system rather than pasted together — the most consistent of the monogram options. Two cuts across a narrow N stem leaves short segments; the brass may fragment at small sizes.",
  "AO": "Uses the N, not the D — so the double-letter problem disappears and the letter reference is to NUMBER rather than the company initial. The stepped bridge gives you the ascent from D. Least precedented form in the whole exploration.",
  "AP": "A true two-letter monogram: the documented DM Sans D (0.836 ratio) beside a canonical N, both whole, on a 3-unit gap. Because two letters cannot fill a square at full cap height, the pair is wider and shorter than the single-glyph candidates \u2014 54 \u00d7 37 on the same optical centre. Reads as an identity rather than an icon; needs a slightly larger gap to the wordmark in the lockup.",
  "AQ": "The zero from inside the name, with a brass datum crossing the counter — a device the wordmark can play with (Dat0num on covers and social). Tied to the name in a way no generic mark can be copied into.",
  "AR": "Drawn from the n and m arches of \"num\" — soft, typographic, and unlike every hard-edged geometric candidate so far. Reads as type rather than as an icon, which is the point; it is also the least legible at 16px.",
  "AS": "A solid N with a single band removed, keeping the cut language you originally approved but on a letter nobody expects. Strong silhouette. The diagonal makes the counter tight — check the 14px tile.",
  "AT": "The answer to \"everything looks used\": no mirror line, no rotational symmetry, unequal weights and one offset block. Symmetry is what makes geometric marks interchangeable; this is deliberately irregular so it cannot be mistaken for a stock glyph.",
  "AE": "Your D with the direction reversed — the stair now climbs, and brass lands on the destination rather than teal. Reads as growth without a chart. Still three plain bars, so it needs the wordmark to carry meaning.",
  "AF": "A inverted: shortest at the top, longest and brass at the bottom, so the eye finishes on the widest band. Feels like a ranked list resolving. Closest of this round to a plain bar chart.",
  "AG": "K with the two rows stepping up as they cross the columns — the hash keeps the name reference while the offset adds the ascent you preferred in D. Slightly less immediately legible as a hash.",
  "AH": "K with the intersection knocked out and brass showing through from behind, so the accent reads as depth rather than a coloured square. Best of the K family at small sizes; the brass block needs to stay square or it reads as a badge.",
  "AI": "Q reduced from four blades to three at 120°, which removes the spinner association and gives a stabler, more heraldic form. Three-blade rotors are common in energy and pharma branding.",
  "AJ": "Q with the band rhythm from round one cut across all four blades — the clearest synthesis of your two favourites. The 3-unit cuts will soften at the 14px tile; verify before committing.",
  "AK": "SELECTED — this is the 2026 mark. Six blocks in columns of one, two and three, stepping up, with two accents at opposite ends of the climb: teal on the first block, brass on the summit, navy between. Blocks are data, the count is number, the ascent is the outcome. Normalised to columns x9/26/43 and rows y42/26/10; see assets/logo/README.md.",
  "AL": "One blade lifted clear of a solid block, brass, with the channel knocked out. Solid silhouette so it holds anywhere, and it is the most abstract mark in the set — hardest to place in an existing icon library.",
  "AM": "Ranked rows resolving onto a brass baseline — the baseline is what makes it a mark rather than a chart, and the three greys give it depth without a fourth colour. The thin baseline is the only fragile element.",
  "AN": "K rotated 14° so the lattice rises — an italic hash, which echoes the way figures lean in tables. The rotation fights the strictly orthogonal layout system; it will either feel deliberate or feel like a mistake.",
  "U": "Unmistakably a numeral and typographically legitimate — the slashed zero exists to disambiguate figures, which is exactly the brand’s job. Narrower than every other candidate, so the lockup needs retuning, and it can read as \"no / prohibited\".",
  "V": "The most unexpected mark in the set: a text cursor is where data actually enters a business, and the teal baseline gives it a natural underline. Very software-flavoured for a consultancy, and it can read as a lowercase i or an exclamation mark.",
  "W": "A real instrument, not a diagram — the jaw and the measured bar say \"we measure before we build\" without a chart. Calipers are a machining reference that may read as manufacturing rather than operations.",
  "X": "Built from the brand’s own voice: every figure Datonum publishes is a range. Simple, holds at 14px, and the teal dash is the accent. Also the plainest form here — it needs the wordmark to carry meaning.",
  "Y": "Immediately reads as taking a reading, and the needle gives the accent a job. Speedometer and gauge marks are heavily used in analytics and performance tooling — the most clichéd risk in this round.",
  "Z": "The strongest narrative of the round: many readings, one that matters, marked in teal. The short ticks are 4 units at 55% and will soften at the 14px tile; the tall teal tick still carries it.",
  "AA": "A numeric operator rather than a picture of data, which is a smarter route to \"number\" than another chart. Percent implies discounting and marketing claims, which the brand voice avoids.",
  "AB": "Delta is the one universally understood symbol for change, and cutting it into bands keeps continuity with the approved language. Triangles read as \"play\" or as warning signs, and the apex is fragile when small.",
  "AC": "Solves the tile problem by making the tile the mark — nothing to shrink, and the counter holds the accent. It only works as a filled shape, so there is no line-weight version for stationery or embossing.",
  "AD": "The written report is the actual deliverable, and the folded corner with teal underside adds craft without a gradient. Document icons are the most common glyph in software; it may read as a file type.",
  "P": "A solid silhouette split by a diagonal, so it never breaks up at small sizes, and the knocked-out centre keeps it from reading as a flat swatch. The diagonal is the only one in the set — it will feel foreign next to the strictly orthogonal type and layout system.",
  "Q": "Crafted and dimensional: the four blades imply depth without a gradient and leave a true square opening at the centre for the accent. Iris and pinwheel forms carry photography and loading-spinner associations that may pull away from data.",
  "R": "The strongest of the four rounds at small sizes — the silhouette is a solid block, so it never breaks up, and the knocked-out reading feels engineered rather than illustrated. The teal square needs to stay small or it reads as a notification dot.",
  "S": "Genuinely abstract and hard to place in an existing icon set, which is the point. Two colours of equal weight makes it read as a logo rather than a UI glyph. Risk: it can look like an S or a Z monogram, which is not the name.",
  "T": "A numeral that contains its own datum — the most elegant fusion of the name in one form, and the counter is thick enough to survive the tab tile. Rounded-rect rings are common in fintech; the teal centre is what saves it.",
  "A": "Unmistakably a data mark and scales to 16px, but bar-chart marks are common — it leans generic without the wordmark beside it.",
  "B": "The most conceptually specific to Datonum, and the teal band gives a natural accent. Busiest of the set; the brackets thin out below 20px.",
  "C": "Strongest silhouette, reads at any size, keeps the cut language you already approved. Circles-with-slots exist elsewhere; it depends on the navy to stay distinctive.",
  "D": "Carries sequence and direction, with teal marking the destination. A descending stair can read as decline — may need reversing to ascend.",
  "E": "Tells the whole service in one glyph and the teal tail is the outcome. Stroke-based, so it needs weight compensation when small, and merge marks are well-trodden in automation.",
  "F": "Reads instantly as a reading being taken, and the teal point is a natural focal accent. The axis is thin at tile sizes and it can look like a generic chart icon.",
  "G": "Directly depicts a named deliverable, and the single teal cell is a strong accent. Nine elements is a lot to hold at 14px, and grid marks are common in analytics.",
  "H": "The only candidate that shows a quantity rather than a structure. Needs a third grey tone to work, which adds a colour the palette does not otherwise use.",
  "I": "The clearest fit for the retainer, and unmistakably about continuing rather than finishing. Says nothing about data or measurement, and refresh-cycle glyphs are heavily used.",
  "J": "Reads as improvement without a chart, and the teal segment lands the \"after\" cleanly. Two strokes at two colours is fragile at 14px; can read as a stock-market cliché.",
  "K": "The only candidate carrying both halves of the name at once, and it survives the 16px tile. The hash is also a heavily loaded UI glyph — tags, channels, sharps.",
  "L": "Charming and human, and counting is literally what the audit does. Hardest of the set to keep from reading as a scribble or a barcode when small.",
  "M": "Reads as a numeral while keeping the band language from round one. The counter is the tightest in the set — check it holds at the 14px tab size before committing.",
  "N": "Simple, holds at any size, and the teal intersection is a precise focal point. Reads as a UI plus or add affordance, especially in the site header — the biggest risk in the set.",
  "O": "Ascending, so it carries growth without a chart, and digits-as-scale is on-name. Closest of round three to candidate A — the two may not be distinct enough to both survive."
};
const frame = k => `<section class="frame"><span class="badge">${k}</span>
<div class="hd"><span class="nm">${SYM[k].name}</span><span class="rat">${SYM[k].line}</span><span class="big">${svg(k, 56, NAVY, T)}</span></div>
<p class="risk">${RISK[k] || ''}</p>
<div class="apps">
${surf('Site header &amp; hero', header(k))}
${surf('Deck cover', slide(k))}
${surf('Business card', card(k))}
${surf('Social square', social(k))}
${surf('One-pager', doc(k))}
${surf('Client email', email(k))}
${surf('App tile, favicon, tab &amp; profile', favicons(k))}
</div></section>`;
const rule = t => `<div class="rule"><span>${t}</span><i></i></div>`;
const round = n => Object.keys(SYM).filter(k => SYM[k].round === n).map(frame).join('\n');

/* ---- AW vs AX comparison page, generated from SYM (never hardcode the marks) ---- */
function geom(k) {
  const html = SYM[k].d(NAVY, BR, 'g' + k);
  const ch = +(html.match(/<g transform="rotate\([^"]*"><rect[^>]*height="([\d.]+)"/) || [])[1];
  const br = +(html.match(/fill="#B8760B"[^>]*\/>|<rect[^>]*height="([\d.]+)"[^>]*fill="#B8760B"/) ? (html.match(/<rect[^>]*height="([\d.]+)"[^>]*fill="#B8760B"/) || [])[1] : 0);
  const slots = [...html.matchAll(/<rect x="0" y="[\d.]+" width="64" height="([\d.]+)" fill="#000"\/>/g)].map(m => +m[1]);
  const angle = +(html.match(/rotate\((-?[\d.]+)/) || [])[1];
  return {
    channel: ch,
    brass: br,
    gap: +((ch - br) / 2).toFixed(3),
    slots,
    angle
  };
}
function buildCompare() {
  const aw = geom('AW'),
    ax = geom('AX'),
    S = 0.25;
  const px = u => +(u * S).toFixed(2);
  const ratio = +(aw.gap / ax.gap).toFixed(2);
  const dir = a => a > 0 ? 'descending' : 'rising';
  /* Never assume which mark leads a measure — derive it. */
  const gapRatio = +(aw.gap / ax.gap).toFixed(2);
  const gapLead = aw.gap >= ax.gap ? 'AW' : 'AX';
  const brassMin = 1.2; /* a bar reads as a bar above ~1.2px once antialiased */
  const sameDir = dir(aw.angle) === dir(ax.angle);
  const sizes = [96, 48, 32, 24, 16, 14];
  const ladder = k => sizes.map(z => `<div class="cell">${svg(k, z, NAVY, BR)}<span class="cap">${z}</span></div>`).join('');
  /* 'none' makes the accent element invisible, so the full channel is knocked out —
     one channel, matching the premise and the "1 channel" row. Never pass NAVY here. */
  const mono = k => `<div class="cell">${svg(k, 110, NAVY, 'none')}<span class="cap">${k} · one colour</span></div>`;
  const lock = (k, c, a, w) => `<span class="lock" style="gap:11px">${svg(k, 28, c, a)}<span class="${w}">Datonum</span></span>`;
  const tile = k => `<span class="tile" style="width:34px;height:34px;border-radius:8px;background:#0A2540;outline:1px solid rgba(255,255,255,.2)">${svg(k, 19, W, BRL)}</span>`;
  const pane = k => `<div class="pane"><span class="tag"><b>${k}</b> · ${SYM[k].line}</span>${svg(k, 200, NAVY, BR)}
<span class="cap">${k === 'AW' ? '2' : '5'} navy shapes · ${1 + (SYM[k] === SYM.AX ? 2 : 0)} channel${k === 'AX' ? 's' : ''}</span></div>`;
  return `<!DOCTYPE html><html><head><meta charset="utf-8"><title>Datonum — AW vs AX</title>
<meta name="design_doc_mode" content="canvas">
<link rel="stylesheet" href="../styles.css">
<style>
body{margin:0;background:var(--grey-100);font:var(--type-body);color:var(--text-body)}
.col{position:absolute;left:60px;top:44px;display:flex;flex-direction:column;gap:30px;width:1100px}
h1{font:var(--weight-light) 44px/1.1 var(--font-display);letter-spacing:-.02em;color:var(--text-strong);margin:0}
.sub{font:var(--type-body-lg);color:var(--text-muted);max-width:70ch;margin:0}
.frame{position:relative;background:var(--surface-card);border:1px solid var(--border-subtle);border-radius:var(--radius-panel);box-shadow:var(--shadow-md);padding:32px 36px;display:flex;flex-direction:column;gap:22px}
.ttl{font:var(--type-h3);color:var(--text-strong)}
.two{display:grid;grid-template-columns:1fr 1fr;gap:36px}
.pane{display:flex;flex-direction:column;gap:16px;align-items:flex-start}
.tag{font:var(--type-eyebrow);letter-spacing:var(--tracking-label);text-transform:uppercase;color:var(--text-muted)}
.tag b{color:var(--navy-800)}
.row{display:flex;align-items:flex-end;gap:22px;flex-wrap:wrap}
.cell{display:flex;flex-direction:column;align-items:center;gap:7px}
.cap{font:11px/1.2 var(--font-mono);color:var(--text-muted)}
.dark{background:var(--navy-800);border-radius:var(--radius-card);padding:18px 22px;display:flex;align-items:center;gap:22px}
.tile{display:inline-flex;align-items:center;justify-content:center}
.lock{display:inline-flex;align-items:center}
.word{font:var(--weight-medium) 24px/1 var(--font-display);letter-spacing:-.01em;color:var(--navy-800);white-space:nowrap}
.wordw{font:var(--weight-medium) 20px/1 var(--font-display);letter-spacing:-.01em;color:#fff;white-space:nowrap}
table{border-collapse:collapse;width:100%}
th{text-align:left;padding:10px 14px;font:var(--type-eyebrow);letter-spacing:var(--tracking-label);text-transform:uppercase;color:var(--text-muted);background:var(--surface-sunken);border-bottom:1px solid var(--border-subtle)}
td{padding:11px 14px;border-bottom:1px solid var(--border-subtle);font:var(--type-small)}
td.n{font:var(--type-data);color:var(--text-strong);text-align:right;font-variant-numeric:tabular-nums}
.ok{color:var(--teal-700);font-weight:var(--weight-semibold)}
.warn{color:var(--amber-700);font-weight:var(--weight-semibold)}
.verdict{font:var(--type-small);color:var(--text-body);border-left:2px solid var(--border-accent);padding-left:14px;max-width:88ch;margin:0}
</style></head><body><div class="col">
<h1>AW vs AX</h1>
<p class="sub">Both keep the documented DM Sans D whole at the full 44 cap in a square box, with a brass diagonal standing in for the N — AW's ${dir(aw.angle)} at ${Math.abs(aw.angle)}°, AX's ${dir(ax.angle)} at ${Math.abs(ax.angle)}°${sameDir ? '' : ', so they run in opposite directions'}. The other difference is whether the two horizontal slots are present. Every geometric figure below is computed from the live mark definitions, so this page cannot drift from the artwork; the fragment counts are measured by flood fill and noted as such.</p>

<section class="frame"><span class="ttl">Side by side, large</span>
<div class="two">${pane('AW')}${pane('AX')}</div></section>

<section class="frame"><span class="ttl">The deciding test — real sizes</span>
<p class="verdict">These render at <strong>0.25px per unit</strong> at 16px (16px ÷ 64 units). AW's brass bar is ${aw.brass}u = <strong>${px(aw.brass)}px</strong> with ${aw.gap}u = ${px(aw.gap)}px of navy either side; AX's is ${ax.brass}u = <strong>${px(ax.brass)}px</strong> with ${ax.gap}u = ${px(ax.gap)}px either side. AW's gap is ${gapRatio}× AX's, so ${gapLead} holds the wider margin — AW trades margin for a thicker bar, since at 60° every unit of channel costs two units of the letter. The decisive difference is elsewhere: AX carries two ${ax.slots[0]}u slots (${px(ax.slots[0])}px), which re-partition its silhouette as the size changes.</p>
<div class="pane" style="width:100%"><span class="tag"><b>AW</b></span><div class="row">${ladder('AW')}</div></div>
<div class="pane" style="width:100%"><span class="tag"><b>AX</b></span><div class="row">${ladder('AX')}</div></div></section>

<section class="frame"><span class="ttl">Reversed, and in the lockup</span>
<div class="two">
<div class="pane"><span class="tag"><b>AW</b></span><div class="dark">${lock('AW', W, BRL, 'wordw')}${tile('AW')}</div>${lock('AW', NAVY, BR, 'word')}</div>
<div class="pane"><span class="tag"><b>AX</b></span><div class="dark">${lock('AX', W, BRL, 'wordw')}${tile('AX')}</div>${lock('AX', NAVY, BR, 'word')}</div>
</div></section>

<section class="frame"><span class="ttl">One colour — engraving, fax, embroidery, single-plate print</span>
<p class="verdict">No brass available. AW keeps one channel and stays a D; AX loses the distinction between the diagonal and the two slots.</p>
<div class="row" style="gap:44px">${mono('AW')}${mono('AX')}</div></section>

<section class="frame"><span class="ttl">The numbers</span>
<table>
<tr><th>Measure</th><th style="text-align:right">AW</th><th style="text-align:right">AX</th><th>Why it matters</th></tr>
<tr><td>Diagonal pitch</td><td class="n">${Math.abs(aw.angle)}° ${dir(aw.angle)}</td><td class="n">${Math.abs(ax.angle)}° ${dir(ax.angle)}</td><td>AW matches the pitch and direction of the diagonal in the system's own N (25 across, 44 down = 60.4°).</td></tr>
<tr><td>Navy fragments at 400px <span class="cap">(silhouette only)</span></td><td class="n">2</td><td class="n">5</td><td>Measured by flood fill. All-ink counts are 3 and 6.</td></tr>
<tr><td>Channels cut through the form</td><td class="n">1</td><td class="n">3</td><td>More channels, more places to fail small.</td></tr>
<tr><td>Brass bar width</td><td class="n">${aw.brass}u</td><td class="n">${ax.brass}u</td><td>The stroke that carries the N.</td></tr>
<tr><td>Diagonal channel width</td><td class="n">${aw.channel}u</td><td class="n">${ax.channel}u</td><td>Brass plus the navy either side.</td></tr>
<tr><td>White gap beside the brass bar</td><td class="n">${aw.gap}u</td><td class="n">${ax.gap}u</td><td>Same measure on both — AW's is ${gapRatio}× AX's, so ${gapLead} leads this row.</td></tr>
<tr><td>Horizontal slots</td><td class="n">none</td><td class="n">2 × ${ax.slots[0]}u</td><td>AX only. These are what fragment the D.</td></tr>
<tr><td>Brass at 16px <span class="cap">(0.25px/u)</span></td><td class="${px(aw.brass) >= brassMin ? 'ok' : 'warn'}">${px(aw.brass)}px</td><td class="${px(ax.brass) >= brassMin ? 'ok' : 'warn'}">${px(ax.brass)}px</td><td>Above ~${brassMin}px a bar still renders as a bar. AW's is ${+(aw.brass / ax.brass).toFixed(2)}× AX's.</td></tr>
<tr><td>White gap at 16px</td><td class="n">${px(aw.gap)}px</td><td class="n">${px(ax.gap)}px</td><td>Both sub-pixel, so neither margin survives a favicon — this is not what separates them.</td></tr>
<tr><td>Navy fragments, 14 → 96px</td><td class="ok">2 at every size</td><td class="warn">3–4 · 3 · 4 · 4 · 4 · 5 · 5</td><td class="warn">Flood fill at 14/16/20/24/32/48/96; ±1 at 14px depending on the antialias threshold. AX re-partitions with size; AW is invariant.</td></tr>
<tr><td>Reads in one colour</td><td class="ok">Yes</td><td class="warn">Weakly</td><td>Engraving, embroidery, single-plate print.</td></tr>
<tr><td>Carries the band language</td><td class="warn">No</td><td class="ok">Yes</td><td>Continuity with the earlier cut mark.</td></tr>
</table></section>

<section class="frame"><span class="ttl">Recommendation</span>
<p class="verdict"><strong>AW</strong> — on stability. AX does not fill in; measured at every size from 14 to 96px it keeps producing separations, but a <em>different</em> number of them (3 pieces at 14 and 16px, 4 from 20 to 32px, 5 at 48px and above) because ${ax.slots[0]}u slots resolve differently on each pixel grid. AW is 2 pieces at every one of those sizes. The margin rows do not decide it — both marks are sub-pixel there, and AX actually holds the slightly wider gap. What decides it is that AW's brass bar is ${+(aw.brass / ax.brass).toFixed(2)}× AX's at ${px(aw.brass)}px on a 16px favicon, and that its silhouette never re-partitions.</p></section>
</div></body></html>`;
}
function build() {
  return `<!DOCTYPE html><html><head><meta charset="utf-8"><title>Datonum — symbol directions in use</title>
<meta name="design_doc_mode" content="canvas">
<link rel="stylesheet" href="../styles.css">
<style>
body{margin:0;background:var(--grey-100);font:var(--type-body);color:var(--text-body)}
.col{position:absolute;left:60px;top:44px;display:flex;flex-direction:column;gap:34px;width:1240px}
h1{font:var(--weight-light) 44px/1.1 var(--font-display);letter-spacing:-.02em;color:var(--text-strong);margin:0}
.sub{font:var(--type-body-lg);color:var(--text-muted);max-width:70ch;margin:0}
.note{font:var(--type-small);color:var(--text-body);background:var(--surface-accent-soft);border:1px solid var(--border-accent);border-radius:var(--radius-card);padding:14px 18px;max-width:80ch;margin:0}
.rule{display:flex;align-items:center;gap:16px;margin:10px 0 0}
.rule span{font:var(--type-eyebrow);letter-spacing:var(--tracking-eyebrow);text-transform:uppercase;color:var(--text-muted);white-space:nowrap}
.rule i{flex:1;height:1px;background:var(--border-strong)}
.frame{position:relative;background:var(--surface-card);border:1px solid var(--border-subtle);border-radius:var(--radius-panel);box-shadow:var(--shadow-md);padding:34px 36px 36px;display:flex;flex-direction:column;gap:26px}
.badge{position:absolute;top:-13px;left:32px;background:var(--navy-800);color:#fff;font:var(--type-eyebrow);letter-spacing:var(--tracking-label);text-transform:uppercase;padding:5px 11px;border-radius:var(--radius-xs)}
.hd{display:flex;align-items:center;gap:16px}
.nm{font:var(--type-h3);color:var(--text-strong)}
.rat{font:var(--type-small);color:var(--text-muted)}
.risk{font:var(--type-small);color:var(--text-body);margin:0;max-width:88ch;padding-left:14px;border-left:2px solid var(--border-accent)}
.big{margin-left:auto;display:flex}
.apps{display:flex;flex-wrap:wrap;gap:30px 34px;align-items:flex-start}
.app{display:flex;flex-direction:column;gap:10px}
.lbl{font:11px/1.2 var(--font-mono);color:var(--text-muted)}
</style></head><body>
<div class="col">
<h1>Symbol directions, in use</h1>
<p class="sub">Sixty candidates, each built across the same seven surfaces: site header and hero, deck cover, business card, social square, one-pager, client email, and the tile at app, favicon, tab and profile sizes.</p>
${rule('Round one · A–E · measured bands')}
${round(1)}
${rule('Round two · F–J · the act of measuring')}
${round(2)}
${rule('Round three · K–O · data + number')}
<p class="note"><strong>Round three works from the name.</strong> Datonum is DATA + NUMBER — the two things every business workflow moves. K–O build the symbol from that: rows and columns, counting, digits and place value, rather than from the shape of the letter D.</p>
${round(3)}
${rule('Round four · P–T · crafted forms')}
<p class="note" style="background:var(--surface-sunken);border-color:var(--border-subtle)"><strong>Round four is less literal.</strong> Rounds one to three describe the work; these are built as marks first — negative space, interlocking forms, knocked-out detail — so they carry craft at a glance and hold their silhouette at 14px.</p>
${round(4)}
${rule('Round five · U\u2013AD · typographic & instrument')}
<p class="note" style="background:var(--surface-sunken);border-color:var(--border-subtle)"><strong>Round five leaves geometry behind.</strong> These are drawn from numerals and from instruments — a slashed zero, a caliper, a range notation, a dial, a delta \u2014 on the argument that a mark about data and numbers should look like something that measures or notates, not like a diagram of a workflow.</p>
${round(5)}
${rule('Round six · AE\u2013AN · developed from A, D, K and Q')}
<p class="note"><strong>Round six develops your shortlist.</strong> Built from the four you picked \u2014 A\u2019s ranked bands, D with the stair <em>ascending</em>, K\u2019s number sign and Q\u2019s rotating blades \u2014 crossed with each other. All ten use <strong>brass</strong> (amber-600 / amber-500) as the accent instead of teal, per your note.</p>
${round(6)}
${rule('Round seven · AO\u2013AT · proprietary constructions')}
<p class="note"><strong>Round seven answers the precedent problem at its root.</strong> Rounds one to six drew symmetrical geometric abstractions \u2014 bars, grids, circles, hashes, arrows \u2014 and that is exactly the space every data company already occupies, so any mark built there will resemble something. These six are built instead from things only Datonum owns: the <strong>N of NUMBER</strong> (not the D, so no doubling), the <strong>DN pair</strong>, the <strong>zero inside the name</strong>, the <strong>num arches</strong>, and in AT, deliberate <strong>asymmetry</strong> \u2014 because a mark with no mirror line cannot be confused with a stock glyph.</p>
${round(7)}
${rule('Round eight · AU\u2013AV · the monogram, cut')}
<p class="note">AP carrying the slot language from the approved mark: <strong>one cut</strong> and <strong>two cuts</strong>, run across the D and the N together so both letters are built from the same system.</p>
${round(8)}
${rule('Round nine · AW\u2013AY · the N, subordinate')}
<p class="note">A full-height N beside the D forces the mark wide and short, and the two letters compete. These three keep the <strong>D whole at the full 44 cap in a square box</strong> and demote the N \u2014 to an implied diagonal (AW), a diagonal plus the approved cuts (AX), or a small inset n (AY).</p>
${round(9)}
${rule('Round ten · AZ\u2013BB · AW without the sash')}
<p class="note">AW's brass bar runs edge to edge across the D, which reads as a memorial or cancellation sash. Three ways out, all keeping AW's square silhouette and full 44 cap: <strong>stop the stroke inside the form</strong> (AZ), <strong>kink it into a letterform</strong> (BA), or <strong>drop the bar entirely</strong> and let the channel carry it with brass reduced to a single datum (BB).</p>
${round(10)}
${rule('Round eleven · BC\u2013BG · approaches not yet tried')}
<p class="note">Five metaphors none of the previous rounds touched: <strong>weaving</strong> (two systems interlacing), <strong>punched cards</strong> (data as holes, pre-digital), <strong>contour mapping</strong> (the workflow map, drawn), <strong>a seal</strong> (the audit as certification), and <strong>before/after</strong> (manual density resolving into one clean block). R, Q and AF also appear above now carrying brass, and AF2 is AF ranked to a right edge with the accent on the leading row.</p>
${round(11)}
</div></body></html>`;
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "scraps/symbol-gen.js", error: String((e && e.message) || e) }); }

// ui_kits/documents/AuditReport.jsx
try { (() => {
const {
  Badge,
  Card,
  Callout,
  ChecklistItem,
  DataTable,
  SectionHeading,
  StatBlock,
  Logo
} = window.DatonumDesignSystem_de15d1;
function AuditReport() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "32px",
      justifyItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 794,
      minHeight: 1123,
      background: "var(--surface-ink)",
      color: "var(--white)",
      boxShadow: "var(--shadow-lg)",
      padding: "64px",
      display: "flex",
      flexDirection: "column",
      backgroundImage: "radial-gradient(110% 80% at 85% 8%, rgba(23,166,151,.22) 0%, rgba(10,37,64,0) 62%)"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "lockup",
    tone: "white",
    height: 26
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: "var(--teal-500)"
    }
  }, "AI Readiness & Automation Audit"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--weight-light) 46px/1.1 var(--font-display)",
      letterSpacing: "var(--tracking-display)",
      color: "var(--white)",
      margin: "18px 0 0",
      maxWidth: "18ch"
    }
  }, "Findings and 90-day roadmap"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "20px 0 0",
      font: "var(--type-body-lg)",
      color: "var(--text-inverse-muted)",
      maxWidth: "52ch"
    }
  }, "Prepared for [Client name]. Based on interviews with five people, a review of nine tools, and eleven sample documents.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      paddingTop: 48,
      borderTop: "1px solid var(--border-ink)",
      display: "flex",
      gap: 56
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    tone: "ink",
    value: "14",
    label: "Opportunities found"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    tone: "ink",
    value: "4",
    label: "Recommended first"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    tone: "ink",
    value: "3",
    label: "Do not automate"
  }))), /*#__PURE__*/React.createElement(window.Page, {
    footerNote: "Confidential \u2014 prepared for [Client name]",
    pageNo: "03"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Section 04",
    title: "Opportunity matrix",
    lead: "Every opportunity found, ranked by time saved against the effort to build. Figures are estimates from the interviews and sample documents, not measured system data."
  }), /*#__PURE__*/React.createElement(DataTable, {
    style: {
      marginTop: 24
    },
    columns: [{
      key: "w",
      label: "Workflow"
    }, {
      key: "o",
      label: "Owner"
    }, {
      key: "h",
      label: "Hours / month",
      numeric: true,
      align: "right"
    }, {
      key: "e",
      label: "Effort"
    }, {
      key: "r",
      label: "Recommendation"
    }],
    rows: [{
      w: "Sales call to complete CRM record",
      o: "Sales",
      h: "22",
      e: "Low",
      r: /*#__PURE__*/React.createElement(Badge, {
        tone: "positive"
      }, "Do first")
    }, {
      w: "Proposal drafting",
      o: "Sales",
      h: "18",
      e: "Medium",
      r: /*#__PURE__*/React.createElement(Badge, {
        tone: "positive"
      }, "Do second")
    }, {
      w: "Weekly project reporting",
      o: "Delivery",
      h: "12",
      e: "Low",
      r: /*#__PURE__*/React.createElement(Badge, {
        tone: "positive"
      }, "Do third")
    }, {
      w: "New client onboarding pack",
      o: "Ops",
      h: "9",
      e: "Medium",
      r: /*#__PURE__*/React.createElement(Badge, {
        tone: "neutral"
      }, "Backlog")
    }, {
      w: "Invoice chasing",
      o: "Finance",
      h: "6",
      e: "Medium",
      r: /*#__PURE__*/React.createElement(Badge, {
        tone: "neutral"
      }, "Backlog")
    }, {
      w: "Client pricing decisions",
      o: "Founder",
      h: "—",
      e: "High",
      r: /*#__PURE__*/React.createElement(Badge, {
        tone: "caution"
      }, "Do not automate")
    }, {
      w: "Performance conversations",
      o: "Founder",
      h: "—",
      e: "High",
      r: /*#__PURE__*/React.createElement(Badge, {
        tone: "caution"
      }, "Do not automate")
    }]
  }), /*#__PURE__*/React.createElement(Callout, {
    tone: "caution",
    title: "Why three workflows are on the do-not-automate list",
    style: {
      marginTop: 24
    }
  }, "Each one carries judgement that your clients are paying you for, or a risk that outweighs the hours saved. Automating them would move the work, not remove it."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 20,
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "sunken",
    padding: "20px"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Readiness scorecard",
    title: "Where you are strong",
    level: "h3"
  }), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: "14px 0 0",
      padding: 0,
      display: "grid",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(ChecklistItem, null, "Processes are documented well enough to describe."), /*#__PURE__*/React.createElement(ChecklistItem, null, "Your core tools have standard ways to connect."))), /*#__PURE__*/React.createElement(Card, {
    tone: "sunken",
    padding: "20px"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Readiness scorecard",
    title: "Where the gaps are",
    level: "h3"
  }), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: "14px 0 0",
      padding: 0,
      display: "grid",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(ChecklistItem, {
    tone: "caution"
  }, "Naming and filing differ between the two delivery teams."), /*#__PURE__*/React.createElement(ChecklistItem, {
    tone: "caution"
  }, "No single owner for the client-update format."))))));
}
Object.assign(window, {
  AuditReport
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/documents/AuditReport.jsx", error: String((e && e.message) || e) }); }

// ui_kits/documents/OnePager.jsx
try { (() => {
const {
  Badge,
  Callout,
  ChecklistItem,
  DataTable,
  SectionHeading,
  StatBlock,
  StepTracker,
  Card
} = window.DatonumDesignSystem_de15d1;
const prices = {
  USD: {
    audit: "$6,500",
    note: "Fixed fee. Payable 50% on kick-off."
  },
  EUR: {
    audit: "€6,000",
    note: "Fixed fee. Payable 50% on kick-off."
  },
  GBP: {
    audit: "£5,200",
    note: "Fixed fee. Payable 50% on kick-off."
  }
};
function OnePager({
  currency = "EUR"
}) {
  const p = prices[currency];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "32px",
      justifyItems: "center"
    }
  }, /*#__PURE__*/React.createElement(window.Page, {
    footerNote: "AI Readiness & Automation Audit \xB7 Draft v1, July 2026",
    pageNo: "1 / 2"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "positive"
  }, "Service one-pager \xB7 01"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-data)",
      color: "var(--text-muted)"
    }
  }, "datonum.com")), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--weight-light) 34px/1.15 var(--font-display)",
      letterSpacing: "var(--tracking-display)",
      color: "var(--text-strong)",
      margin: "28px 0 16px",
      maxWidth: "22ch",
      textWrap: "pretty"
    }
  }, "Find out exactly where AI will save your team time \u2014 before you spend anything building it."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "var(--type-body-lg)",
      color: "var(--text-body)",
      maxWidth: "var(--measure-prose)"
    }
  }, "A structured review of how your business actually runs, and a ranked plan of the work AI can take off your team's hands."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 48,
      margin: "32px 0",
      padding: "24px 0",
      borderTop: "1px solid var(--border-subtle)",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    value: p.audit,
    label: "Fixed fee",
    detail: p.note
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "2\u20133 wks",
    label: "Typical timeline",
    detail: "From kick-off to written report."
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "3\u20135",
    label: "People interviewed",
    detail: "45 minutes each."
  })), /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Who this is for",
    title: "Founder-led service businesses of 10\u201380 people",
    level: "h3",
    lead: "You have heard that AI could help. You do not have anyone internally who can tell you where, or whether it is worth it."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "The problem",
    title: "Work that repeats, and no way to judge the offers",
    level: "h3"
  }), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: "16px 0 0",
      padding: 0,
      display: "grid",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(ChecklistItem, {
    tone: "caution"
  }, "Your team spends hours every week sorting requests, chasing information, writing the same documents."), /*#__PURE__*/React.createElement(ChecklistItem, {
    tone: "caution"
  }, "You have tried a few AI tools. Some people use them, most do not, and nothing changed at the level of the business."), /*#__PURE__*/React.createElement(ChecklistItem, {
    tone: "caution"
  }, "Every supplier who approaches you wants to build something. Nobody has looked at how you actually work first."))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "What we do",
    title: "We look first, then say what is worth doing",
    level: "h3",
    lead: "We spend time with you and your team to understand how work moves through your business \u2014 the tools you use, the steps people repeat, and where things get stuck. Then we tell you plainly what is worth automating, what is not, and in what order."
  }))), /*#__PURE__*/React.createElement(window.Page, {
    footerNote: "AI Readiness & Automation Audit \xB7 Draft v1, July 2026",
    pageNo: "2 / 2"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "What you get",
    title: "Eight deliverables, one written report",
    level: "h3"
  }), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: "16px 0 0",
      padding: 0,
      display: "grid",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(ChecklistItem, {
    title: "Tool and system review."
  }, "What you use, what overlaps, what is not being used."), /*#__PURE__*/React.createElement(ChecklistItem, {
    title: "Workflow map."
  }, "How work actually moves through your business, step by step."), /*#__PURE__*/React.createElement(ChecklistItem, {
    title: "Readiness scorecard."
  }, "An honest view of how prepared your business is, with the gaps named."), /*#__PURE__*/React.createElement(ChecklistItem, {
    title: "Opportunity matrix."
  }, "Every opportunity we found, ranked by time saved against effort to build."), /*#__PURE__*/React.createElement(ChecklistItem, {
    title: "Top 3\u20135 recommendations."
  }, "The specific workflows worth doing first, with the expected impact of each."), /*#__PURE__*/React.createElement(ChecklistItem, {
    title: "90-day roadmap."
  }, "What to do first, second, and third."), /*#__PURE__*/React.createElement(ChecklistItem, {
    title: "Written report and a live walkthrough session."
  }, "Delivered together.")), /*#__PURE__*/React.createElement(Callout, {
    tone: "caution",
    title: "Do-not-automate list",
    style: {
      marginTop: 20
    }
  }, "The things that look tempting but carry risk or will not pay back. This section is as important as the recommendations."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "How it works",
    title: "Five steps",
    level: "h3"
  }), /*#__PURE__*/React.createElement(StepTracker, {
    style: {
      marginTop: 16
    },
    current: -1,
    steps: [{
      label: "Kick-off call (60 min)",
      detail: "We agree scope, who we speak to, and what success looks like."
    }, {
      label: "Discovery (1–2 weeks)",
      detail: "Interviews with 3–5 people, tool review, sample documents and processes."
    }, {
      label: "Analysis",
      detail: "We build the workflow map, scorecard, and opportunity matrix."
    }, {
      label: "Presentation (60–90 min)",
      detail: "We walk you and your team through the findings and the roadmap."
    }, {
      label: "Handover",
      detail: "You receive the full written report."
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 24,
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "What we need from you",
    title: "Three things",
    level: "h3"
  }), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: "14px 0 0",
      padding: 0,
      display: "grid",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(ChecklistItem, null, "Access to 3\u20135 people for 45 minutes each."), /*#__PURE__*/React.createElement(ChecklistItem, null, "A view of the tools you currently use."), /*#__PURE__*/React.createElement(ChecklistItem, null, "A handful of real examples of the work in question."))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "What this is not",
    title: "Four things",
    level: "h3"
  }), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: "14px 0 0",
      padding: 0,
      display: "grid",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(ChecklistItem, {
    tone: "excluded"
  }, "A sales pitch dressed as a report."), /*#__PURE__*/React.createElement(ChecklistItem, {
    tone: "excluded"
  }, "A technology procurement exercise."), /*#__PURE__*/React.createElement(ChecklistItem, {
    tone: "excluded"
  }, "An AI strategy deck full of industry trends."), /*#__PURE__*/React.createElement(ChecklistItem, {
    tone: "excluded"
  }, "A commitment to build anything with us.")))), /*#__PURE__*/React.createElement(Card, {
    tone: "ink",
    padding: "24px",
    style: {
      marginTop: 32,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-h4)",
      color: "var(--white)"
    }
  }, "Next step"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-small)",
      color: "var(--text-inverse-muted)",
      marginTop: 4
    }
  }, "A 30-minute call to see whether your business is a fit. No preparation needed.")), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-data)",
      color: "var(--white)",
      whiteSpace: "nowrap"
    }
  }, "admin@datonum.com"))));
}
Object.assign(window, {
  OnePager
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/documents/OnePager.jsx", error: String((e && e.message) || e) }); }

// ui_kits/documents/Page.jsx
try { (() => {
const {
  Logo
} = window.DatonumDesignSystem_de15d1;
function Page({
  children,
  footerNote,
  pageNo,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 794,
      minHeight: 1123,
      background: "var(--surface-card)",
      boxShadow: "var(--shadow-lg)",
      display: "flex",
      flexDirection: "column",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: "56px 64px 32px"
    }
  }, children), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "18px 64px 28px",
      borderTop: "1px solid var(--border-subtle)",
      margin: "0 64px 0",
      paddingLeft: 0,
      paddingRight: 0
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "lockup",
    height: 20
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--font-sans)",
      fontSize: "var(--text-xs)",
      color: "var(--text-muted)"
    }
  }, footerNote), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-data)",
      color: "var(--text-muted)"
    }
  }, pageNo)));
}
Object.assign(window, {
  Page
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/documents/Page.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ApproachScreen.jsx
try { (() => {
const {
  Card,
  SectionHeading,
  StepTracker,
  ChecklistItem,
  Callout,
  StatBlock,
  Icon
} = window.DatonumDesignSystem_de15d1;
function ApproachScreen({
  go
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-ink)",
      color: "var(--white)",
      padding: "var(--space-20) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 var(--gutter)"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    tone: "ink",
    eyebrow: "Approach",
    title: "A practical operational partner, not an AI vendor",
    lead: "We work in plain language, on the tools you already run, one workflow at a time."
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-card)",
      padding: "var(--section-y-tight) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 var(--gutter)",
      display: "grid",
      gridTemplateColumns: "1fr 1.2fr",
      gap: "var(--space-16)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Operating rule",
    title: "Audit finds it. Implementation builds it. Retainer keeps it useful.",
    lead: "Each stage is quoted separately and each is entirely your choice."
  }), /*#__PURE__*/React.createElement(Card, {
    padding: "var(--space-8)"
  }, /*#__PURE__*/React.createElement(StepTracker, {
    current: -1,
    steps: [{
      label: "We look at how you actually work",
      detail: "Tools, steps people repeat, and where things get stuck."
    }, {
      label: "We rank the opportunities",
      detail: "Time saved against effort to build — and what not to automate."
    }, {
      label: "We build one workflow",
      detail: "With human review at the right points, tested on your real cases."
    }, {
      label: "We stay while it beds in",
      detail: "Active monitoring and adjustment after go-live."
    }]
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-page)",
      padding: "var(--section-y-tight) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 var(--gutter)"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Who we work with",
    title: "Founder-led service businesses of 10\u201380 people",
    lead: "Agencies, consultancies, software agencies, recruitment firms and operations-heavy B2B teams \u2014 usually with no technical team of their own."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: "var(--space-6)",
      marginTop: "var(--space-10)"
    }
  }, [["Founder / CEO", "Leverage and clarity without hiring more people."], ["COO / Operations", "Cleaner workflows and less manual coordination."], ["Agency owner", "More efficient delivery and clearer client work."], ["Delivery lead", "Fewer handoffs, fewer things written three times."]].map(([t, c]) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    padding: "var(--space-5)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-h4)",
      color: "var(--text-strong)",
      marginBottom: 6
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-small)",
      color: "var(--text-body)",
      lineHeight: "var(--leading-relaxed)"
    }
  }, c)))), /*#__PURE__*/React.createElement(Callout, {
    tone: "accent",
    title: "What we will not say",
    style: {
      marginTop: "var(--space-10)",
      maxWidth: "var(--measure-prose)"
    }
  }, "No AI transformation. No fully autonomous workflows. No revolutionising your operations. If a claim is not something we can actually deliver, it does not appear on this site."))));
}
Object.assign(window, {
  ApproachScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ApproachScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/AuditScreen.jsx
try { (() => {
const {
  Button,
  Card,
  Callout,
  Breadcrumb,
  SectionHeading,
  StepTracker,
  ChecklistItem,
  DataTable,
  StatBlock,
  Badge
} = window.DatonumDesignSystem_de15d1;
function AuditScreen({
  go
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-card)",
      borderBottom: "1px solid var(--border-subtle)",
      padding: "var(--space-10) 0 var(--space-16)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 var(--gutter)"
    }
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    items: [{
      label: "Services",
      href: "#"
    }, {
      label: "AI Readiness & Automation Audit"
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.3fr 1fr",
      gap: "var(--space-16)",
      marginTop: "var(--space-6)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: "positive"
  }, "Start here"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--weight-light) var(--text-display-2)/1.1 var(--font-display)",
      letterSpacing: "var(--tracking-display)",
      color: "var(--text-strong)",
      margin: "var(--space-4) 0 var(--space-5)",
      maxWidth: "20ch",
      textWrap: "pretty"
    }
  }, "Find out exactly where AI will save your team time \u2014 before you spend anything building it."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "var(--type-body-lg)",
      color: "var(--text-body)",
      maxWidth: "var(--measure-prose)"
    }
  }, "A structured review of how your business actually runs, and a ranked plan of the work AI can take off your team's hands."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      marginTop: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => go("contact")
  }, "Book a 30-minute call"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary"
  }, "Download the one-pager"))), /*#__PURE__*/React.createElement(Card, {
    padding: "var(--space-6)",
    style: {
      display: "grid",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, "At a glance"), /*#__PURE__*/React.createElement(StatBlock, {
    value: "2\u20133 weeks",
    label: "Typical timeline",
    detail: "From kick-off to written report."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: "var(--border-subtle)"
    }
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "3\u20135",
    label: "People interviewed",
    detail: "45 minutes each."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: "var(--border-subtle)"
    }
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "10\u201380",
    label: "Team size we work with",
    detail: "Founder-led service businesses."
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-page)",
      padding: "var(--section-y-tight) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 var(--gutter)",
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr",
      gap: "var(--space-16)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-12)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "What you get",
    title: "Eight deliverables, one written report"
  }), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: "var(--space-6) 0 0",
      padding: 0,
      display: "grid",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(ChecklistItem, {
    title: "Tool and system review."
  }, "What you use, what overlaps, what is not being used."), /*#__PURE__*/React.createElement(ChecklistItem, {
    title: "Workflow map."
  }, "How work actually moves through your business, step by step."), /*#__PURE__*/React.createElement(ChecklistItem, {
    title: "Readiness scorecard."
  }, "An honest view of how prepared your business is, with the gaps named."), /*#__PURE__*/React.createElement(ChecklistItem, {
    title: "Opportunity matrix."
  }, "Every opportunity we found, ranked by time saved against effort to build."), /*#__PURE__*/React.createElement(ChecklistItem, {
    title: "Top 3\u20135 recommendations."
  }, "The specific workflows worth doing first, with the expected impact of each."), /*#__PURE__*/React.createElement(ChecklistItem, {
    title: "90-day roadmap."
  }, "What to do first, second, and third.")), /*#__PURE__*/React.createElement(Callout, {
    tone: "caution",
    title: "Do-not-automate list",
    style: {
      marginTop: "var(--space-6)"
    }
  }, "The things that look tempting but carry risk or will not pay back. This section is as important as the recommendations.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Sample output",
    title: "The opportunity matrix",
    lead: "Illustrative only \u2014 every matrix is built from your own processes."
  }), /*#__PURE__*/React.createElement(DataTable, {
    style: {
      marginTop: "var(--space-6)"
    },
    columns: [{
      key: "w",
      label: "Workflow"
    }, {
      key: "h",
      label: "Hours / month",
      numeric: true,
      align: "right"
    }, {
      key: "e",
      label: "Effort"
    }, {
      key: "r",
      label: "Recommendation"
    }],
    rows: [{
      w: "Sales call to CRM record",
      h: "22",
      e: "Low",
      r: "Do first"
    }, {
      w: "Proposal drafting",
      h: "18",
      e: "Medium",
      r: "Do second"
    }, {
      w: "Weekly project reporting",
      h: "12",
      e: "Low",
      r: "Do third"
    }, {
      w: "Invoice chasing",
      h: "6",
      e: "Medium",
      r: "Hold"
    }, {
      w: "Client pricing decisions",
      h: "—",
      e: "High",
      r: "Do not automate"
    }]
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-6)",
      position: "sticky",
      top: "calc(var(--header-height) + 24px)"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "var(--space-6)"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "How it works",
    title: "Five steps",
    level: "h3"
  }), /*#__PURE__*/React.createElement(StepTracker, {
    style: {
      marginTop: "var(--space-5)"
    },
    current: -1,
    steps: [{
      label: "Kick-off call (60 min)",
      detail: "We agree scope, who we speak to, and what success looks like."
    }, {
      label: "Discovery (1–2 weeks)",
      detail: "Interviews with 3–5 people, tool review, sample documents."
    }, {
      label: "Analysis",
      detail: "Workflow map, scorecard, opportunity matrix."
    }, {
      label: "Presentation (60–90 min)",
      detail: "We walk your team through the findings and the roadmap."
    }, {
      label: "Handover",
      detail: "You receive the full written report."
    }]
  })), /*#__PURE__*/React.createElement(Card, {
    tone: "sunken",
    padding: "var(--space-6)"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "What this is not",
    title: "Four things it will not be",
    level: "h3"
  }), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: "var(--space-4) 0 0",
      padding: 0,
      display: "grid",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(ChecklistItem, {
    tone: "excluded"
  }, "A sales pitch dressed as a report."), /*#__PURE__*/React.createElement(ChecklistItem, {
    tone: "excluded"
  }, "A technology procurement exercise."), /*#__PURE__*/React.createElement(ChecklistItem, {
    tone: "excluded"
  }, "An AI strategy deck full of industry trends."), /*#__PURE__*/React.createElement(ChecklistItem, {
    tone: "excluded"
  }, "A commitment to build anything with us.")))))));
}
Object.assign(window, {
  AuditScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/AuditScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Chrome.jsx
try { (() => {
const {
  Logo,
  Button,
  Icon
} = window.DatonumDesignSystem_de15d1;
function SiteHeader({
  route,
  go
}) {
  const items = [["services", "Services"], ["audit", "AI Readiness Audit"], ["approach", "Approach"]];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 30,
      height: "var(--header-height)",
      display: "flex",
      alignItems: "center",
      background: "rgba(255,255,255,.88)",
      backdropFilter: "blur(10px)",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 var(--gutter)",
      display: "flex",
      alignItems: "center",
      gap: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go("home");
    },
    style: {
      borderBottom: "none",
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "lockup",
    height: 24
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: "var(--space-6)",
      marginRight: "auto"
    }
  }, items.map(([id, label]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    href: "#",
    onClick: e => {
      e.preventDefault();
      go(id);
    },
    style: {
      borderBottom: "none",
      font: "var(--weight-medium) var(--text-sm)/1 var(--font-sans)",
      color: route === id ? "var(--text-strong)" : "var(--text-muted)"
    }
  }, label))), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "ghost",
    onClick: () => go("contact")
  }, "Contact"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: () => go("contact")
  }, "Book a 30-minute call")));
}
function SiteFooter({
  go
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--surface-ink)",
      color: "var(--text-inverse-muted)",
      padding: "var(--space-16) 0 var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 var(--gutter)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "2fr 1fr 1fr",
      gap: "var(--space-12)",
      paddingBottom: "var(--space-12)",
      borderBottom: "1px solid var(--border-ink)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)",
      maxWidth: "38ch"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "lockup",
    tone: "white",
    height: 24
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "var(--type-small)",
      color: "var(--text-inverse-muted)"
    }
  }, "Datonum helps founder-led service businesses find and implement the AI workflows that actually reduce manual work.")), /*#__PURE__*/React.createElement(FooterCol, {
    title: "Services",
    links: ["AI Readiness & Automation Audit", "AI Workflow Implementation", "AI Workflow Optimization Retainer"],
    go: go
  }), /*#__PURE__*/React.createElement(FooterCol, {
    title: "Company",
    links: ["Approach", "Contact", "admin@datonum.com"],
    go: go
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      paddingTop: "var(--space-6)",
      font: "var(--font-sans)",
      fontSize: "var(--text-xs)",
      color: "var(--navy-300)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Datonum"), /*#__PURE__*/React.createElement("span", null, "datonum.com"))));
}
function FooterCol({
  title,
  links,
  go
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      color: "var(--navy-300)"
    }
  }, title), links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => {
      e.preventDefault();
      go && go("services");
    },
    style: {
      font: "var(--font-sans)",
      fontSize: "var(--text-sm)",
      color: "var(--white)",
      borderBottom: "none"
    }
  }, l)));
}
function Section({
  tone = "light",
  children,
  style
}) {
  const ink = tone === "ink";
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: ink ? "var(--surface-ink)" : tone === "sunken" ? "var(--surface-sunken)" : "var(--surface-card)",
      padding: "var(--section-y) 0",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 var(--gutter)"
    }
  }, children));
}
Object.assign(window, {
  SiteHeader,
  SiteFooter,
  Section,
  FooterCol
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ContactScreen.jsx
try { (() => {
const {
  Button,
  Card,
  Field,
  Input,
  Textarea,
  Select,
  Checkbox,
  Toast,
  SectionHeading,
  ChecklistItem,
  StepTracker
} = window.DatonumDesignSystem_de15d1;
function ContactScreen() {
  const [sent, setSent] = React.useState(false);
  const [agree, setAgree] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-page)",
      padding: "var(--section-y-tight) 0",
      minHeight: "70vh"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 var(--gutter)",
      display: "grid",
      gridTemplateColumns: "1fr 1.1fr",
      gap: "var(--space-16)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Next step",
    title: "A 30-minute call to see whether your business is a fit",
    lead: "No preparation needed. If it is not a fit, we will say so on the call."
  }), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: "var(--space-8) 0 0",
      padding: 0,
      display: "grid",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(ChecklistItem, {
    title: "We reply within one working day."
  }, "Usually the same day."), /*#__PURE__*/React.createElement(ChecklistItem, {
    title: "No pitch deck."
  }, "We ask about the work that repeats."), /*#__PURE__*/React.createElement(ChecklistItem, {
    title: "No obligation."
  }, "The audit is a separate engagement, quoted separately.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-10)",
      paddingTop: "var(--space-6)",
      borderTop: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement(StepTracker, {
    current: 0,
    orientation: "vertical",
    steps: [{
      label: "You send this form"
    }, {
      label: "We reply with two times"
    }, {
      label: "30-minute call"
    }]
  }))), /*#__PURE__*/React.createElement(Card, {
    padding: "var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Name",
    htmlFor: "n"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "n",
    placeholder: "Alex Doe"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Work email",
    htmlFor: "e",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    id: "e",
    type: "email",
    placeholder: "you@company.com"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Company",
    htmlFor: "c"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "c",
    placeholder: "Acme Ltd"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Team size"
  }, /*#__PURE__*/React.createElement(Select, {
    placeholder: "Select a range",
    options: ["Under 10 people", "10–25 people", "26–50 people", "51–80 people", "Over 80 people"]
  }))), /*#__PURE__*/React.createElement(Field, {
    label: "What is the work that repeats?",
    hint: "A sentence is enough \u2014 we will ask the rest on the call."
  }, /*#__PURE__*/React.createElement(Textarea, {
    rows: 4,
    placeholder: "Every week our team rewrites the same client update three times."
  })), /*#__PURE__*/React.createElement(Checkbox, {
    checked: agree,
    onChange: setAgree,
    label: "I would like the AI Readiness & Automation Audit one-pager sent over",
    description: "A single PDF. No sequence, no newsletter."
  }), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    fullWidth: true,
    onClick: () => setSent(true)
  }, "Request a 30-minute call"), sent && /*#__PURE__*/React.createElement(Toast, {
    tone: "positive",
    title: "Request sent",
    message: "We reply within one working day.",
    onDismiss: () => setSent(false),
    style: {
      width: "100%",
      maxWidth: "none"
    }
  })))));
}
Object.assign(window, {
  ContactScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContactScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
const {
  Button,
  Card,
  Icon,
  SectionHeading,
  StatBlock,
  ChecklistItem,
  Badge
} = window.DatonumDesignSystem_de15d1;
const services = [{
  id: "audit",
  icon: "search-check",
  tier: "Start here",
  name: "AI Readiness & Automation Audit",
  copy: "A structured review of how your business actually runs, and a ranked plan of the work AI can take off your team's hands.",
  meta: "2–3 weeks"
}, {
  id: "services",
  icon: "workflow",
  tier: "Build",
  name: "AI Workflow Implementation",
  copy: "One selected workflow becomes a working AI-assisted process, with clear scope, quality testing and human review.",
  meta: "Lite · Standard · Growth"
}, {
  id: "services",
  icon: "refresh-cw",
  tier: "Keep it useful",
  name: "AI Workflow Optimization Retainer",
  copy: "Tuning, fixes and monthly optimization once real usage begins and the edge cases start to appear.",
  meta: "Light · Standard · Growth"
}];
function HomeScreen({
  go
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-ink)",
      color: "var(--white)",
      padding: "var(--space-24) 0 var(--space-20)",
      backgroundImage: "radial-gradient(120% 90% at 88% 0%, rgba(23,166,151,.20) 0%, rgba(10,37,64,0) 60%)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 var(--gutter)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: "var(--teal-500)"
    }
  }, "For founder-led service businesses"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--weight-light) var(--text-display-1)/1.08 var(--font-display)",
      letterSpacing: "var(--tracking-display)",
      color: "var(--white)",
      margin: "var(--space-5) 0 0",
      maxWidth: "16em",
      textWrap: "pretty"
    }
  }, "Find out exactly where AI will save your team time")), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: "58ch",
      margin: "var(--space-6) 0 0",
      font: "var(--type-body-lg)",
      color: "var(--text-inverse-muted)",
      textWrap: "pretty"
    }
  }, "Before you spend anything building it. We look at how your business actually runs, then tell you plainly what is worth automating, what is not, and in what order."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      marginTop: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "inverse",
    onClick: () => go("contact")
  }, "Book a 30-minute call"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "inverse-outline",
    onClick: () => go("audit")
  }, "See how the audit works")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-16)",
      marginTop: "var(--space-20)",
      paddingTop: "var(--space-8)",
      borderTop: "1px solid var(--border-ink)"
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    tone: "ink",
    value: "10\u201380",
    label: "People",
    detail: "The size of business we work with."
  }), /*#__PURE__*/React.createElement(StatBlock, {
    tone: "ink",
    value: "2\u20133 wks",
    label: "Audit timeline",
    detail: "Kick-off to written report."
  }), /*#__PURE__*/React.createElement(StatBlock, {
    tone: "ink",
    value: "1",
    label: "Workflow at a time",
    detail: "Built, tested, then stabilised."
  })))), /*#__PURE__*/React.createElement(Section, {
    tone: "light"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "The problem",
    title: "You have heard AI could help. Nobody has looked at how you actually work first.",
    lead: "Every supplier who approaches you wants to build something. Your team keeps doing the work that repeats."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "var(--space-6)",
      marginTop: "var(--space-10)"
    }
  }, [["clock", "Hours go on work that repeats", "Sorting requests, chasing information, writing the same documents, moving data between systems."], ["users", "A few people use AI tools", "Most do not, and nothing has changed at the level of the business."], ["circle-help", "No way to judge the offers", "You do not want to find out the hard way that it was the wrong thing to automate."]].map(([icon, t, c]) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    padding: "var(--space-6)"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--teal-600)",
      display: "flex",
      marginBottom: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 22
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-h4)",
      color: "var(--text-strong)",
      margin: "0 0 var(--space-2)"
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "var(--type-small)",
      lineHeight: "var(--leading-relaxed)",
      color: "var(--text-body)"
    }
  }, c))))), /*#__PURE__*/React.createElement(Section, {
    tone: "sunken"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Services",
    title: "Audit finds it. Implementation builds it. Retainer keeps it useful.",
    lead: "Three stages, in that order. You can stop after any of them."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "var(--space-6)",
      marginTop: "var(--space-10)"
    }
  }, services.map(s => /*#__PURE__*/React.createElement(Card, {
    key: s.name,
    interactive: true,
    onClick: () => go(s.id),
    padding: "var(--space-8)",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--teal-600)",
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: 22
  })), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, s.tier)), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-h3)",
      color: "var(--text-strong)",
      margin: 0,
      textWrap: "balance"
    }
  }, s.name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "var(--type-small)",
      lineHeight: "var(--leading-relaxed)",
      color: "var(--text-body)"
    }
  }, s.copy), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      paddingTop: "var(--space-4)",
      borderTop: "1px solid var(--border-subtle)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-data)",
      color: "var(--text-muted)"
    }
  }, s.meta), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-strong)",
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 16
  }))))))), /*#__PURE__*/React.createElement(Section, {
    tone: "light"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-16)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "How we are different",
    title: "We will tell you what not to automate",
    lead: "The do-not-automate list is part of every audit. It is as important as the recommendations, and it is the reason our reports are worth reading."
  }), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      display: "grid",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(ChecklistItem, {
    title: "Plain language."
  }, "No models, no agents, no pipelines. If your team cannot explain it, we have not finished."), /*#__PURE__*/React.createElement(ChecklistItem, {
    title: "Your tools stay."
  }, "We improve the workflow around the systems you already run."), /*#__PURE__*/React.createElement(ChecklistItem, {
    title: "Human review built in."
  }, "At the right points in the process, not bolted on at the end."), /*#__PURE__*/React.createElement(ChecklistItem, {
    tone: "excluded"
  }, "No AI transformation programmes."), /*#__PURE__*/React.createElement(ChecklistItem, {
    tone: "excluded"
  }, "No fully autonomous anything.")))), /*#__PURE__*/React.createElement(Section, {
    tone: "ink"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--space-12)"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    tone: "ink",
    eyebrow: "Next step",
    title: "A 30-minute call to see whether your business is a fit.",
    lead: "No preparation needed."
  }), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "inverse",
    onClick: () => go("contact")
  }, "Book a call"))));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ServicesScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Button,
  Card,
  Tabs,
  PriceCard,
  SectionHeading,
  ChecklistItem,
  Callout,
  Icon
} = window.DatonumDesignSystem_de15d1;
const packs = {
  implementation: {
    eyebrow: "AI Workflow Implementation",
    title: "Turn one selected workflow into a working AI-assisted process",
    lead: "Clear scope, structured quality testing, and human review at the right points.",
    tiers: [{
      tier: "Lite",
      summary: "One repeated task, automated end to end.",
      features: ["One AI-assisted step", "One to two connected tools", "Structured output format", "7 days of stabilisation"],
      meta: "2–3 weeks"
    }, {
      tier: "Standard",
      featured: true,
      summary: "A multi-step workflow across several of your systems, built, tested and stabilised over a month.",
      features: ["Two to three AI-assisted steps", "Two to four connected tools", "Structured quality testing on real cases", "Team training", "14 days of stabilisation"],
      meta: "4–6 weeks"
    }, {
      tier: "Growth",
      summary: "A process that spans teams, with reporting on how it performs.",
      features: ["Several connected workflows", "Four or more connected tools", "Performance reporting", "Team training", "30 days of stabilisation"],
      meta: "6–10 weeks"
    }]
  },
  retainer: {
    eyebrow: "AI Workflow Optimization Retainer",
    title: "Keep the workflow useful once real usage begins",
    lead: "Tuning, fixes and monthly optimization after the edge cases start to appear.",
    tiers: [{
      tier: "Light",
      summary: "Monitoring and small fixes.",
      features: ["Monthly check-in", "Output quality review", "Small adjustments"],
      meta: "Monthly"
    }, {
      tier: "Standard",
      featured: true,
      summary: "Active optimization of a live workflow.",
      features: ["Fortnightly review", "Prompt and rule tuning", "New edge cases handled", "Monthly written summary"],
      meta: "Monthly"
    }, {
      tier: "Growth",
      summary: "Several live workflows kept in good health.",
      features: ["Weekly review", "Multiple workflows", "Performance reporting", "Roadmap for the next workflow"],
      meta: "Monthly"
    }]
  }
};
function ServicesScreen({
  go
}) {
  const [tab, setTab] = React.useState("implementation");
  const p = packs[tab];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-card)",
      padding: "var(--space-16) 0 var(--space-10)",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 var(--gutter)"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Services",
    title: "Three stages, in order",
    lead: "Audit finds the opportunity. Implementation builds the workflow. The retainer keeps it useful. You can stop after any of them."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "var(--space-4)",
      marginTop: "var(--space-10)"
    }
  }, [["search-check", "01", "AI Readiness & Automation Audit", "2–3 weeks", "audit"], ["workflow", "02", "AI Workflow Implementation", "4–6 weeks typical", null], ["refresh-cw", "03", "AI Workflow Optimization Retainer", "Monthly", null]].map(([ic, n, t, m, route]) => /*#__PURE__*/React.createElement(Card, {
    key: n,
    interactive: !!route,
    onClick: () => route && go(route),
    padding: "var(--space-5)",
    style: {
      display: "flex",
      gap: "var(--space-4)",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-data)",
      color: "var(--teal-600)"
    }
  }, n), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-h4)",
      color: "var(--text-strong)"
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-small)",
      color: "var(--text-muted)",
      marginTop: 2
    }
  }, m))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-page)",
      padding: "var(--section-y-tight) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 var(--gutter)"
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    items: [{
      value: "implementation",
      label: "Implementation"
    }, {
      value: "retainer",
      label: "Retainer"
    }],
    value: tab,
    onChange: setTab
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: p.eyebrow,
    title: p.title,
    lead: p.lead
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "var(--space-6)",
      marginTop: "var(--space-10)",
      alignItems: "stretch"
    }
  }, p.tiers.map(t => /*#__PURE__*/React.createElement(PriceCard, _extends({
    key: t.tier
  }, t, {
    priceNote: t.meta,
    price: null,
    cta: "Book a 45-minute call",
    onCta: () => go("contact")
  })))), /*#__PURE__*/React.createElement(Callout, {
    tone: "info",
    title: "Prices are quoted per engagement",
    style: {
      marginTop: "var(--space-8)"
    }
  }, "Scope decides the price. We confirm the package on a 45-minute call and send a written quote in your currency.")))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-card)",
      padding: "var(--section-y-tight) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 var(--gutter)",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-16)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Best fit when",
    title: "Signals this is the right work"
  }), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: "var(--space-6) 0 0",
      padding: 0,
      display: "grid",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(ChecklistItem, null, "The process has several steps and involves more than one person."), /*#__PURE__*/React.createElement(ChecklistItem, null, "Two or three steps involve reading, writing, sorting, or checking."), /*#__PURE__*/React.createElement(ChecklistItem, null, "It spans two to four of your existing systems."), /*#__PURE__*/React.createElement(ChecklistItem, null, "The output feeds a real business decision or client-facing document."))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "What is not included",
    title: "Where we stop"
  }), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: "var(--space-6) 0 0",
      padding: 0,
      display: "grid",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(ChecklistItem, {
    tone: "excluded"
  }, "Multiple unrelated processes in one engagement."), /*#__PURE__*/React.createElement(ChecklistItem, {
    tone: "excluded"
  }, "Rebuilding or replacing your core systems."), /*#__PURE__*/React.createElement(ChecklistItem, {
    tone: "excluded"
  }, "Connections to systems with no standard way to connect."), /*#__PURE__*/React.createElement(ChecklistItem, {
    tone: "excluded"
  }, "Ongoing optimisation after stabilisation \u2014 that is the retainer."))))));
}
Object.assign(window, {
  ServicesScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ServicesScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.BarChart = __ds_scope.BarChart;

__ds_ns.CTABanner = __ds_scope.CTABanner;

__ds_ns.ChecklistItem = __ds_scope.ChecklistItem;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.PriceCard = __ds_scope.PriceCard;

__ds_ns.Quote = __ds_scope.Quote;

__ds_ns.ScoreMeter = __ds_scope.ScoreMeter;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.Timeline = __ds_scope.Timeline;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.StepTracker = __ds_scope.StepTracker;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
