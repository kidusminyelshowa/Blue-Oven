/* @ds-bundle: {"format":4,"namespace":"BlueOvenDesignSystem_39d1a6","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"74526a695dd9","components/core/Button.jsx":"6d0546ce94b6","components/core/Card.jsx":"18c19b872288","components/core/IconButton.jsx":"f75e7b805e1f","components/core/Tag.jsx":"7f99a8cb5015","components/feedback/Dialog.jsx":"67477a9bde48","components/feedback/Toast.jsx":"cea56768d444","components/feedback/Tooltip.jsx":"198bb3651536","components/forms/Checkbox.jsx":"839c1bffa11f","components/forms/Input.jsx":"4a147d8acb37","components/forms/Radio.jsx":"1fa5a41b8d13","components/forms/Select.jsx":"1ef2983e2656","components/forms/Switch.jsx":"fd61404d10e2","components/navigation/Tabs.jsx":"717e279afff3","ui_kits/cafe-site/Cart.jsx":"cc39a8a911a1","ui_kits/cafe-site/Header.jsx":"3c2214d5e2e9","ui_kits/cafe-site/Home.jsx":"6c21256aed90","ui_kits/cafe-site/Location.jsx":"8a467c131c9c","ui_kits/cafe-site/Menu.jsx":"6561f8050f7a"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.BlueOvenDesignSystem_39d1a6 = window.BlueOvenDesignSystem_39d1a6 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function Badge({
  children,
  tone = "brand"
}) {
  const tones = {
    brand: {
      background: "var(--color-brand)",
      color: "#fff"
    },
    critical: {
      background: "var(--color-critical)",
      color: "#fff"
    },
    neutral: {
      background: "var(--ink-150)",
      color: "var(--color-text-primary)"
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      ...tones[tone],
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-caption)",
      fontWeight: "var(--fw-bold)",
      padding: "3px 9px",
      borderRadius: "var(--radius-pill)",
      letterSpacing: "var(--ls-wide)",
      textTransform: "uppercase"
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function Button({
  variant = "primary",
  size = "m",
  disabled = false,
  children,
  onClick,
  icon
}) {
  const sizes = {
    s: {
      padding: "6px 14px",
      fontSize: "var(--fs-body-s)"
    },
    m: {
      padding: "10px 20px",
      fontSize: "var(--fs-body-m)"
    },
    l: {
      padding: "14px 28px",
      fontSize: "var(--fs-body-l)"
    }
  };
  const base = {
    fontFamily: "var(--font-sans)",
    fontWeight: "var(--fw-bold)",
    border: "1px solid transparent",
    borderRadius: "var(--radius-s)",
    cursor: disabled ? "not-allowed" : "pointer",
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    justifyContent: "center",
    transition: "background var(--duration-fast) var(--ease-standard), color var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard)",
    opacity: disabled ? 0.5 : 1,
    ...sizes[size]
  };
  const variants = {
    primary: {
      background: "var(--color-brand)",
      color: "var(--color-text-on-brand)"
    },
    secondary: {
      background: "transparent",
      color: "var(--color-brand)",
      borderColor: "var(--color-brand)"
    },
    ghost: {
      background: "transparent",
      color: "var(--color-brand)"
    },
    critical: {
      background: "var(--color-critical)",
      color: "#fff"
    },
    inverse: {
      background: "transparent",
      color: "var(--color-text-on-brand)",
      borderColor: "var(--color-text-on-brand)"
    }
  };
  const hovers = {
    primary: {
      background: "var(--color-brand-hover)"
    },
    secondary: {
      background: "var(--color-bg-alt)"
    },
    ghost: {
      background: "var(--color-bg-alt)"
    },
    critical: {
      background: "var(--color-critical-hover)"
    },
    inverse: {
      background: "rgba(255,255,255,0.15)"
    }
  };
  const [hover, setHover] = React.useState(false);
  const style = {
    ...base,
    ...variants[variant],
    ...(hover && !disabled ? hovers[variant] : {})
  };
  return /*#__PURE__*/React.createElement("button", {
    style: style,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, icon, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  children,
  arch = false,
  padding = "var(--space-5)"
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--color-surface)",
      border: "1px solid var(--color-border)",
      borderRadius: arch ? "var(--radius-arch)" : "var(--radius-m)",
      boxShadow: "var(--shadow-s)",
      padding,
      fontFamily: "var(--font-sans)",
      color: "var(--color-text-primary)"
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function IconButton({
  icon,
  children,
  size = 36,
  variant = "ghost",
  ariaLabel,
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  const variants = {
    ghost: {
      background: hover ? "var(--color-bg-alt)" : "transparent",
      color: "var(--color-brand)"
    },
    filled: {
      background: hover ? "var(--color-brand-hover)" : "var(--color-brand)",
      color: "#fff"
    }
  };
  return /*#__PURE__*/React.createElement("button", {
    "aria-label": ariaLabel,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: size,
      height: size,
      borderRadius: "var(--radius-pill)",
      border: "none",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "background var(--duration-fast) var(--ease-standard)",
      ...variants[variant]
    }
  }, icon || children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  children,
  selected = false,
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-body-s)",
      padding: "6px 14px",
      borderRadius: "var(--radius-pill)",
      border: `1px solid ${selected ? "var(--color-brand)" : "var(--color-border-strong)"}`,
      background: selected ? "var(--color-brand)" : hover ? "var(--color-bg-alt)" : "transparent",
      color: selected ? "#fff" : "var(--color-text-primary)",
      cursor: "pointer",
      transition: "background var(--duration-fast) var(--ease-standard)"
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open,
  title,
  children,
  onClose,
  actions
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(14,14,46,0.45)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 100
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: "var(--color-surface)",
      borderRadius: "var(--radius-l)",
      boxShadow: "var(--shadow-l)",
      padding: "var(--space-8)",
      width: "min(420px, 90vw)",
      fontFamily: "var(--font-sans)",
      color: "var(--color-text-primary)"
    }
  }, title && /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--fs-title-m)",
      fontWeight: "var(--fw-bold)",
      margin: "0 0 12px"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-body-m)",
      lineHeight: "var(--lh-relaxed)"
    }
  }, children), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      justifyContent: "flex-end",
      marginTop: "var(--space-6)"
    }
  }, actions)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function Toast({
  message,
  tone = "brand",
  onDismiss
}) {
  const tones = {
    brand: {
      background: "var(--color-brand)"
    },
    success: {
      background: "var(--color-success)"
    },
    critical: {
      background: "var(--color-critical)"
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...tones[tone],
      color: "#fff",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-body-s)",
      padding: "12px 16px",
      borderRadius: "var(--radius-s)",
      boxShadow: "var(--shadow-m)",
      display: "flex",
      alignItems: "center",
      gap: "12px",
      minWidth: 220
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, message), onDismiss && /*#__PURE__*/React.createElement("button", {
    onClick: onDismiss,
    style: {
      background: "none",
      border: "none",
      color: "#fff",
      opacity: 0.8,
      cursor: "pointer",
      fontSize: 14
    }
  }, "\u2715"));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  label,
  children
}) {
  const [show, setShow] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex"
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, children, show && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      bottom: "calc(100% + 6px)",
      left: "50%",
      transform: "translateX(-50%)",
      background: "var(--ink-900)",
      color: "#fff",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-caption)",
      padding: "5px 9px",
      borderRadius: "var(--radius-s)",
      whiteSpace: "nowrap",
      boxShadow: "var(--shadow-m)"
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked,
  onChange,
  disabled
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-body-m)",
      color: "var(--color-text-primary)",
      cursor: disabled ? "default" : "pointer"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      borderRadius: "var(--radius-s)",
      border: `2px solid ${checked ? "var(--color-brand)" : "var(--color-border-strong)"}`,
      background: checked ? "var(--color-brand)" : "var(--color-surface)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, checked && /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "3"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 12l6 6L20 6"
  }))), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      display: "none"
    }
  }), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  error,
  disabled
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      fontFamily: "var(--font-sans)",
      width: "100%"
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-body-s)",
      color: "var(--color-text-secondary)"
    }
  }, label), /*#__PURE__*/React.createElement("input", {
    type: type,
    placeholder: placeholder,
    value: value,
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-body-m)",
      padding: "10px 12px",
      borderRadius: "var(--radius-s)",
      border: `1px solid ${error ? "var(--color-critical)" : focus ? "var(--color-focus-ring)" : "var(--color-border-strong)"}`,
      outline: focus ? `2px solid ${error ? "var(--color-critical)" : "var(--color-focus-ring)"}` : "none",
      outlineOffset: "1px",
      background: disabled ? "var(--color-bg-alt)" : "var(--color-surface)",
      color: "var(--color-text-primary)"
    }
  }), error && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-caption)",
      color: "var(--color-critical)"
    }
  }, error));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  checked,
  onChange,
  name,
  disabled
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-body-m)",
      color: "var(--color-text-primary)",
      cursor: disabled ? "default" : "pointer"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      borderRadius: "50%",
      border: `2px solid ${checked ? "var(--color-brand)" : "var(--color-border-strong)"}`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: "50%",
      background: "var(--color-brand)"
    }
  })), /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: name,
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      display: "none"
    }
  }), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  options = [],
  value,
  onChange,
  disabled
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      fontFamily: "var(--font-sans)",
      width: "100%"
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-body-s)",
      color: "var(--color-text-secondary)"
    }
  }, label), /*#__PURE__*/React.createElement("select", {
    value: value,
    onChange: onChange,
    disabled: disabled,
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-body-m)",
      padding: "10px 12px",
      borderRadius: "var(--radius-s)",
      border: "1px solid var(--color-border-strong)",
      background: "var(--color-surface)",
      color: "var(--color-text-primary)"
    }
  }, options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked,
  onChange,
  disabled
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      cursor: disabled ? "default" : "pointer"
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      display: "none"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 24,
      borderRadius: "var(--radius-pill)",
      background: checked ? "var(--color-brand)" : "var(--ink-150)",
      position: "relative",
      transition: "background var(--duration-normal) var(--ease-standard)",
      opacity: disabled ? 0.5 : 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 2,
      left: checked ? 18 : 2,
      width: 20,
      height: 20,
      borderRadius: "50%",
      background: "#fff",
      boxShadow: "var(--shadow-s)",
      transition: "left var(--duration-normal) var(--ease-standard)"
    }
  })));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  tabs = [],
  active,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-6)",
      borderBottom: "1px solid var(--color-border)",
      fontFamily: "var(--font-sans)"
    }
  }, tabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    onClick: () => onChange && onChange(t),
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: "10px 2px",
      marginBottom: "-1px",
      fontSize: "var(--fs-body-m)",
      fontWeight: t === active ? "var(--fw-bold)" : "var(--fw-regular)",
      color: t === active ? "var(--color-brand)" : "var(--color-text-secondary)",
      borderBottom: t === active ? "2px solid var(--color-brand)" : "2px solid transparent",
      transition: "color var(--duration-fast) var(--ease-standard)"
    }
  }, t)));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/cafe-site/Cart.jsx
try { (() => {
function Cart({
  items,
  onClose,
  onRemove
}) {
  const {
    Dialog,
    Button,
    Input,
    IconButton
  } = window.BlueOvenDesignSystem_39d1a6;
  const total = items.reduce((s, i) => s + i.priceNum, 0);
  return /*#__PURE__*/React.createElement(Dialog, {
    open: true,
    title: "Your order",
    onClose: onClose,
    actions: /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      onClick: onClose
    }, "Checkout \u2014 $", total.toFixed(2))
  }, items.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--color-text-secondary)"
    }
  }, "Your cart is empty.") : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
      marginBottom: 16
    }
  }, items.map((it, idx) => /*#__PURE__*/React.createElement("div", {
    key: idx,
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", null, it.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-brand)",
      fontWeight: "var(--fw-bold)"
    }
  }, it.price), /*#__PURE__*/React.createElement(IconButton, {
    ariaLabel: "Remove",
    size: 26,
    onClick: () => onRemove(idx),
    icon: /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12
      }
    }, "\u2715")
  }))))), /*#__PURE__*/React.createElement(Input, {
    label: "Name for order",
    placeholder: "Your name"
  }));
}
window.Cart = Cart;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/cafe-site/Cart.jsx", error: String((e && e.message) || e) }); }

// ui_kits/cafe-site/Header.jsx
try { (() => {
function Header({
  active,
  onNav,
  cartCount,
  onCartClick
}) {
  const {
    IconButton
  } = window.BlueOvenDesignSystem_39d1a6;
  const items = ["Home", "Menu", "Location"];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "16px 32px",
      background: "var(--color-surface)",
      borderBottom: "1px solid var(--color-border)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/icon-motif.png",
    style: {
      height: 30
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/wordmark.png",
    style: {
      height: 22
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 28,
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-body-m)"
    }
  }, items.map(i => /*#__PURE__*/React.createElement("a", {
    key: i,
    onClick: () => onNav(i),
    style: {
      cursor: "pointer",
      color: active === i ? "var(--color-brand)" : "var(--color-text-secondary)",
      fontWeight: active === i ? "var(--fw-bold)" : "var(--fw-regular)",
      textDecoration: "none"
    }
  }, i))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    ariaLabel: "Cart",
    variant: "filled",
    onClick: onCartClick,
    icon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "shopping-bag",
      style: {
        width: 18,
        height: 18
      }
    })
  }), cartCount > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: -4,
      right: -4,
      background: "var(--color-critical)",
      color: "#fff",
      fontSize: 11,
      fontWeight: 700,
      borderRadius: "999px",
      width: 18,
      height: 18,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, cartCount)));
}
window.Header = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/cafe-site/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/cafe-site/Home.jsx
try { (() => {
function Home({
  onOrder,
  onViewMenu
}) {
  const {
    Button,
    Card,
    Badge
  } = window.BlueOvenDesignSystem_39d1a6;
  const featured = [{
    name: "Simit",
    desc: "Sesame-crusted ring bread",
    price: "$3.50",
    tag: null
  }, {
    name: "Çay",
    desc: "Black tea, served hot",
    price: "$2.00",
    tag: null
  }, {
    name: "Künefe",
    desc: "Cheese pastry, warm syrup",
    price: "$7.00",
    tag: "New"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--color-brand)",
      color: "#fff",
      padding: "96px 32px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-display-l)",
      fontWeight: "var(--fw-bold)",
      lineHeight: "var(--lh-tight)",
      marginBottom: 16
    }
  }, "Fresh from the oven."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-body-l)",
      opacity: 0.85,
      marginBottom: 32,
      maxWidth: 520,
      marginLeft: "auto",
      marginRight: "auto"
    }
  }, "Simit, \xE7ay & k\xFCnefe \u2014 baked and brewed every morning at Blue Oven."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "l",
    variant: "primary",
    onClick: onOrder,
    icon: /*#__PURE__*/React.createElement("span", {
      style: {
        background: "#fff",
        width: 0
      }
    })
  }, "Order now"), /*#__PURE__*/React.createElement(Button, {
    size: "l",
    variant: "ghost",
    onClick: onViewMenu
  }, "View menu"))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "56px 32px",
      background: "var(--color-bg)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-title-l)",
      fontWeight: "var(--fw-bold)",
      marginBottom: 24,
      color: "var(--color-text-primary)"
    }
  }, "Today's favorites"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 20,
      flexWrap: "wrap"
    }
  }, featured.map(f => /*#__PURE__*/React.createElement(Card, {
    key: f.name,
    padding: "var(--space-5)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 220
    }
  }, f.tag && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "critical"
  }, f.tag)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: "var(--fw-bold)",
      fontSize: "var(--fs-title-s)",
      color: "var(--color-text-primary)"
    }
  }, f.name), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--color-text-secondary)",
      fontSize: "var(--fs-body-s)",
      margin: "4px 0 10px"
    }
  }, f.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--color-brand)",
      fontWeight: "var(--fw-bold)"
    }
  }, f.price)))))), /*#__PURE__*/React.createElement("footer", {
    style: {
      padding: "32px",
      background: "var(--color-bg-alt)",
      textAlign: "center",
      color: "var(--color-text-secondary)",
      fontSize: "var(--fs-body-s)"
    }
  }, "Blue Oven Turkish Cafe"));
}
window.Home = Home;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/cafe-site/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/cafe-site/Location.jsx
try { (() => {
function Location() {
  const {
    Card
  } = window.BlueOvenDesignSystem_39d1a6;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      padding: "40px 32px",
      background: "var(--color-bg)",
      minHeight: 520,
      display: "flex",
      gap: 32,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "1 1 320px",
      maxWidth: 420
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-title-l)",
      fontWeight: "var(--fw-bold)",
      marginBottom: 20,
      color: "var(--color-text-primary)"
    }
  }, "Visit us"), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14,
      color: "var(--color-text-primary)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "map-pin",
    style: {
      width: 18,
      height: 18,
      color: "var(--color-brand)",
      flexShrink: 0,
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("div", null, "412 Ocak Street", /*#__PURE__*/React.createElement("br", null), "Portland, OR")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "clock",
    style: {
      width: 18,
      height: 18,
      color: "var(--color-brand)",
      flexShrink: 0,
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("div", null, "Mon\u2013Sat, 7am\u20134pm", /*#__PURE__*/React.createElement("br", null), "Closed Sundays"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "1 1 320px",
      borderRadius: "var(--radius-m)",
      background: "var(--color-surface-sunken)",
      minHeight: 260,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--color-text-muted)",
      fontSize: "var(--fs-body-s)"
    }
  }, "Map placeholder"));
}
window.Location = Location;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/cafe-site/Location.jsx", error: String((e && e.message) || e) }); }

// ui_kits/cafe-site/Menu.jsx
try { (() => {
function Menu({
  onAdd
}) {
  const {
    Tag,
    Card,
    Badge,
    Button
  } = window.BlueOvenDesignSystem_39d1a6;
  const categories = ["Pastries", "Savory", "Drinks"];
  const [cat, setCat] = React.useState("Pastries");
  const items = {
    Pastries: [{
      name: "Simit",
      desc: "Sesame-crusted ring bread",
      price: "$3.50"
    }, {
      name: "Poğaça",
      desc: "Soft savory-filled roll",
      price: "$4.00"
    }, {
      name: "Künefe",
      desc: "Cheese pastry, warm syrup",
      price: "$7.00",
      tag: "New"
    }],
    Savory: [{
      name: "Menemen",
      desc: "Eggs, tomato, pepper",
      price: "$8.50"
    }, {
      name: "Börek",
      desc: "Layered pastry, feta filling",
      price: "$6.00"
    }],
    Drinks: [{
      name: "Çay",
      desc: "Black tea, served hot",
      price: "$2.00"
    }, {
      name: "Türk Kahvesi",
      desc: "Turkish coffee, unfiltered",
      price: "$3.50"
    }]
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      padding: "40px 32px",
      background: "var(--color-bg)",
      minHeight: 520
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-title-l)",
      fontWeight: "var(--fw-bold)",
      marginBottom: 20,
      color: "var(--color-text-primary)"
    }
  }, "Menu"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginBottom: 28
    }
  }, categories.map(c => /*#__PURE__*/React.createElement(Tag, {
    key: c,
    selected: cat === c,
    onClick: () => setCat(c)
  }, c))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 20,
      flexWrap: "wrap"
    }
  }, items[cat].map(it => /*#__PURE__*/React.createElement(Card, {
    key: it.name
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 230,
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, it.tag && /*#__PURE__*/React.createElement(Badge, {
    tone: "critical"
  }, it.tag), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: "var(--fw-bold)",
      fontSize: "var(--fs-title-s)",
      color: "var(--color-text-primary)"
    }
  }, it.name), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--color-text-secondary)",
      fontSize: "var(--fs-body-s)"
    }
  }, it.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-brand)",
      fontWeight: "var(--fw-bold)"
    }
  }, it.price), /*#__PURE__*/React.createElement(Button, {
    size: "s",
    variant: "secondary",
    onClick: () => onAdd(it)
  }, "Add")))))));
}
window.Menu = Menu;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/cafe-site/Menu.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
