# YAML — The Complete Guide

## Introduction

YAML stands for **"YAML Ain’t Markup Language"**.
It is a **data serialization language** designed to be **human-readable** and **easy to write**.
Developers often use YAML files for configuration, automation, and defining structured data.

YAML is popular in:
- **Docker** (`docker-compose.yml`)
- **Kubernetes** (`deployment.yml`, `service.yml`)
- **GitHub Actions** (`.github/workflows/*.yml`)
- **Ansible**, **CloudFormation**, and many CI/CD tools.

---

## Why Use `.yml` or `.yaml` Files?

YAML allows you to represent **hierarchical data** clearly, without clutter like braces `{}` or commas.

**Advantages:**
- Easier to **read and maintain** than JSON or XML.
- **Supports comments** (JSON doesn’t).
- Handles **complex nested data structures**.
- Can **reuse** data via *anchors* and *aliases*.
- Works as a **universal config format**.

Both `.yml` and `.yaml` extensions work — use whichever your team prefers.
> Tip: YAML is indentation-sensitive, always use **2 spaces (not tabs)**.

---

## Basic Syntax Rules

1. **Key–Value Pairs** — written with a colon (`:`)
2. **Indentation** — exactly **2 spaces**, no tabs.
3. **Comments** — start with `#`.
4. **Lists** — each element begins with a `-`.
5. **Case Sensitive** — `Tea` and `tea` are different keys.

### Example: Simple Chai Configuration

```yaml
# This is a comment
version : 3.2
chai_type : blacktea
serving_size : 250

chai_recipe :
  boil_water : 200 ml
  add_tea_leaves : 2 tsp
  brew_time : 5 mins
  add_milk : 50 ml
  add_sugar : to taste

## 🧾 YAML Data Types

YAML supports multiple data types:

### 🔹 String

You can write strings directly or in quotes:

```yaml
favorite_snack : Cream biscuits
flavor: "Masala Chai"
tagline: 'The perfect blend of spices and tea'
```

✅ **Double quotes** are preferred.

#### Multi-Line Strings

**Literal Style (`|`)** – keeps formatting, including newlines:

```yaml
boiling-instructions: |
  1. Boil water in a pot.
  2. Add tea leaves and spices.
  3. Let it brew for 5 minutes.
  4. Add milk and sugar.
  5. Strain and serve hot.
```

**Folded Style (`>`)** – folds lines into a single line (preserves internal newlines where appropriate):

```yaml
boiling-instructions_two: >
  1. Boil water in a pot.
  2. Add tea leaves and spices.
  3. Let it brew for 5 minutes.
  4. Add milk and sugar.
  5. Strain and serve hot.
```

### 🔹 Numbers and Number Systems

```yaml
number_of_cups : 2
number_of_cups_for_second_tea : 0xFF22FF  # hexadecimal
number_of_cups_for_third_tea: 0o12        # octal (converts to 10)
number_of_cups_for_fourth_tea: 0b1010     # binary (converts to 10)
```

### 🔹 Boolean Values

YAML supports multiple boolean syntaxes:

```yaml
is_hot : true
add_sugar: yes
is_iced : false
add_milk: no
instant: off
is_online_order: on
```

### 🔹 Float

```yaml
temperature : 75.5
```

### 🔹 Null

```yaml
special_instruction : null
alternative_tea : ~
```

### 🕒 Timestamps and Dates

YAML supports timestamps and time formats:

```yaml
last_prepared : 2024-10-01T10:30:00Z
next_preparation : 2024-10-02
more_info : 2024-10-01T10:30:00+05:30

preffered_time : 10:30:00
preffered_date : 2024-10-02
preffered_format: 2024-10-01 10:30:00
```

-----

## 📋 Lists (Sequences)

Lists are represented with a **hyphen (`-`) and two spaces of indentation**.

### Simple List

```yaml
available_flavors :
  - masala
  - ginger
  - elaichi
```

### Mixed Data Types

```yaml
another_list_of_snacks :
  - samosa
  - pakora
  - true
  - 42
  - 3.14
```

### Inline List

Lists can also be written in a compact, JSON-like array format:

```yaml
spices: [ cinnamon, cardamom, ginger, cloves, black_pepper ]
```

-----

## 🧱 Nested Structures

### Nested List (List of Maps)

```yaml
nutrition_facts :
  - calories : 150
  - protein : 3 g
  - fat : 5 g
  - carbohydrates : 25 g  
  - vitamins :
    - vitamin_a : 2 %
    - vitamin_c : 0 %
    - calcium : 15 %  
    - iron : 4 %
  - minerals :
    - sodium : 10 mg
    - potassium : 100 mg
```

### Nested Object (Map) with Nested List

```yaml
masala_spices :
  primary_spices :
    type: whole
    spices_list : 
      - cardamom
      - cinnamon
      - cloves
  
  secondary_spices :
    type: ground
    spices_list :
      - ginger
      - black_pepper
```

### 🧺 List of Dictionaries (Maps)

Each dictionary is a separate list item, great for defining multiple objects like services or resources.

```yaml
popular_chai_variants :
  - variant_name : masala_chai
    ingredients :
      - tea_leaves
      - milk
      - sugar
      - spices
  - variant_name : ginger_chai
    ingredients :
      - tea_leaves
      - milk
      - sugar
      - ginger
  - variant_name : elaichi_chai
    ingredients :
      - tea_leaves
      - milk
      - sugar
      - cardamom
```

-----

## 🧷 Anchor and Alias (Reusability)

**Anchors (`&`)** store reusable content. **Aliases (`*`)** reference that stored data. The `<<:` key is used for merge keys in maps.

```yaml
default_recipe: &default_chai_recipe
  boil_water : 200 ml
  add_tea_leaves : 2 tsp
  brew_time : 5 mins
  add_milk : 50 ml
  add_sugar : to taste

default_chai_base: &default_chai_base
  chai_type : blacktea
  serving_size : 250

morning_chai:
  << : [*default_chai_base, *default_chai_recipe]
  milk_preference : full_cream # Overrides can be added here

evening_chai:
  << : [*default_chai_base, *default_chai_recipe]
  milk_preference : skimmed
```

✅ You can **override properties** when using aliases by simply listing the new key/value after the alias merge.

-----

## 🔤 Explicit Data Types (Tags)

YAML allows explicit typing with the `!!` operator (known as a **tag**). This forces a specific interpretation of a value.

```yaml
string_example : !!str 12345
integer_example : !!int "67890"
float_example : !!float "3.14159" 
boolean_example : !!bool "true"
null_example : !!null "null"
```

### Explicit Collection Types

You can define sets and ordered maps:

```yaml
unique_spices : !!set
  ? cardamom
  ? cinnamon
  ? ginger
```

-----

## 📄 Multi-Document YAML

YAML allows **multiple documents** (or configurations) in a single file, separated by `---`.

```yaml
---   
version : 1.0
chai_type : greentea
serving_size : 200
chai_recipe :
  boil_water : 180 ml
  add_tea_leaves : 2 tsp
  brew_time : 4 mins
  add_milk : 20 ml
  add_sugar : to taste
---
version : 2.0
chai_type : oolong
serving_size : 220
chai_recipe :
  boil_water : 200 ml
  add_tea_leaves : 2 tsp
  brew_time : 5 mins
  add_milk : 30 ml
  add_sugar : to taste
---
version : 3.0
chai_type : herbal
serving_size : 250
chai_recipe :
  boil_water : 250 ml
  add_tea_leaves : 0 tsp
  brew_time : 7 mins
  add_milk : 0 ml
  add_sugar : to taste
```

Each section above acts as a separate YAML document, which is common in tools like Kubernetes.

-----

## 🧩 YAML as a Configuration File

YAML is ideal for storing application configurations because:

  - It’s easy for both humans and machines to read.
  - It clearly expresses key–value hierarchies.
  - It supports environment-agnostic configs (no code execution).

### Example: Web App Config

```yaml
version: 3.2
app:
  name: chai_store
  environment: production
  server:
    host: 0.0.0.0
    port: 8080
  database:
    host: localhost
    user: chai_admin
    password: secure123
```

-----

## 💬 YAML in Real-World Use Cases

### Docker Compose

```yaml
version: "3.8"
services:
  web:
    image: nginx
    ports:
      - "8080:80"
```

### GitHub Actions

```yaml
name: CI Pipeline
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npm install && npm test
```

-----

## ✅ Summary Table

| Concept | Description |
| :--- | :--- |
| `.yml` / `.yaml` | File extensions for YAML |
| Comments | Begin with `#` |
| Indentation | Always **2 spaces** |
| Data Types | `string`, `int`, `float`, `bool`, `null`, `date/time` |
| Lists | Represented with `-` followed by a space |
| Anchors / Aliases | Use `&` (anchor) and `*` (alias) to reuse and reference data |
| Explicit Types | Define data formats manually using `!!tag` |
| Multi-Docs | Separate documents with `---` |

-----

## 🧭 Key Takeaways

1.  YAML is **indentation-sensitive** and easy to read.
2.  It is primarily used for **configuration files** and **automation tools**.
3.  Always **validate** YAML files — indentation errors are common.
4.  The Red Hat YAML extension in VS Code helps with syntax and schema validation.

-----

## 🔗 References

  - [Official YAML Specification](https://yaml.org/)
  - [Red Hat YAML VS Code Extension](https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml)
  - [ChaiCode Docs](https://docs.chaicode.com/youtube/chai-aur-git/introduction/)
  - [Learn YAML Playground](https://yaml-online-parser.appspot.com/)

-----

*Version: 3.2*
*Document: YAML Full Guide*
*Author: Poojan*
*Generated by: GPT-5 (Docs Mode)*

```
```