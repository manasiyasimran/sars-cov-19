from Bio import PDB
import nglview

# Load the SARS-CoV-2 spike glycoprotein structure (replace '6VSB' with the actual PDB ID)
pdb_id = '6VXX'
pdb_filename = f'{pdb_id.lower()}.pdb'

# Download the PDB file if not already present
pdbl = PDB.PDBList()
pdbl.retrieve_pdb_file(pdb_id, file_format='pdb', pdir='.')

# Load the structure
parser = PDB.PDBParser(QUIET=True)
structure = parser.get_structure(pdb_id, pdb_filename)

# Create an NGLview widget and add the structure
view = nglview.show_biopython(structure)

# Display the structure
view.parameters = {"backgroundColor": "white", "clipDist": 0}
view.camera = "orthographic"
view.center()  # Use the 'center' method instead of 'center_view'

# Show the NGLview widget
view
